import { AbortError } from 'p-retry';
import fetch from 'isomorphic-fetch';

export default function buildSurveyURL(data) {
    let survey, keyword;
    
    survey = data.storenum + data.termnum + data.transid;
    keyword = data.year + data.month + data.day + data.secret

    return findRandomNum(survey, keyword)
}

// probably a better way to do this
let randomNum = 1; // 0
async function findRandomNum(surveyNum, keywordNum) {
    let baseURL = "https://shielded-beach-28637.herokuapp.com/https://feedback.inmoment.com/websurvey/2/begin";
        
    keywordNum = randomNum + keywordNum;

    let newURL = baseURL + '?gateway=WalgreensQR' + '&survey=' + surveyNum + '&keyword=' + keywordNum + "&timeofvisit=1200";

    const response = await fetch(newURL);

    if (response.status === 303) {
        console.log("got the secret number! it is ", randomNum);
        
        randomNum = 0;
        return surveyNum + randomNum + keywordNum;
    } else if (response.status === 404) {
        throw new AbortError(response.statusText);
    }
    randomNum++

    // console.log(await pRetry(findRandomNum, {retries: 10}))
    console.log("did not get valid RFN")
}