// import { AbortError } from 'p-retry';
import fetch from 'isomorphic-fetch';

export default function buildSurveyURL(data) {
    let survey, keyword;
    
    survey = data.storenum + data.termnum + data.transid;
    keyword = data.year + data.month + data.day + data.secret

    return findRandomNum(survey, keyword)
}

// probably a better way to do this
let randomNum = 0;
async function findRandomNum(surveyNum, keywordNum) {
    let baseURL = "https://shielded-beach-28637.herokuapp.com/https://feedback.inmoment.com/websurvey/2/begin";
        
    keywordNum = randomNum + keywordNum;

    let newURL = baseURL + '?gateway=WalgreensQR' + '&survey=' + surveyNum + '&keyword=' + keywordNum + "&timeofvisit=1200";

    const response = await fetch(newURL);
    let foundGoodResponse = checkFinalURL(response)

    if (!foundGoodResponse && randomNum <10) {
        console.log(randomNum)
        randomNum++
        findRandomNum(surveyNum, keywordNum)
    } else if (foundGoodResponse) {
        console.log("we found a valid RFN!")
        return surveyNum + randomNum + keywordNum
    }
    // if (response.status === 303) {
    //     console.log("got the secret number! it is ", randomNum);
        
    //     return surveyNum + randomNum + keywordNum;
    // } else if (response.status === 404) {
    //     throw new AbortError(response.statusText);
    // }

    // console.log(await pRetry(findRandomNum, {retries: 10}))
    console.log("did not get valid RFN after 10 loops")
    randomNum = 0;
}

function checkFinalURL(response) {
    let finalURL = response.headers.get('X-Final-Url');
    if (finalURL.includes("execute")) {
        console.log("we found a valid survey URL")
        return true;
    }
    return false;
}