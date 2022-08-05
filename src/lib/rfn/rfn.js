/* eventually, id like to turn this into a serverless function, but for some reason
vercel CLI is just not deploying, and i cant seem to fix it, so i'm going with this
for now.
*/

// https://feedback.inmoment.com/websurvey/2/begin?gateway=WalgreensQR&survey=09204710212&keyword=82208030326&timeofvisit=2330
import pRetry, {AbortError} from 'p-retry'
import fetch from 'isomorphic-fetch'

export function buildSurveyURL(data) {
    let survey, keyword;

    survey = data.storenum + data.termnum + data.transid;
    keyword = data.year + data.month + data.day + data.secret;

    findRandomNum(survey, keyword)
}

async function findRandomNum(surveyNum, keywordNum) {
    let baseURL = 'https://feedback.inmoment.com/websurvey/2/begin'
    let randomNum = 0;
    keywordNum = randomNum + keywordNum;

    let newURL = baseURL + '?gateway=WalgreensQR' + '&survey=' + surveyNum + '&keyword=' + keywordNum + "&timeofvisit=1200"

    const response = await fetch(newURL);

    if (response.status === 303) {
        console.log("got the secret number! it is ", randomNum);
        return surveyNum + randomNum + keywordNum;
    } else if (response.status === 404) {
        throw new AbortError(response.statusText);
    }
    randomNum++

    console.log(await pRetry(findRandomNum, {retries: 10}))
}

// function findRandomNum(survey, keyword) {
//     let randomNum = 0;
//     let newURL = url + survey + randomNum + keyword

//     fetch(newURL, + new URLSearchParams({
//         survey: survey,
//         keyword: keyword,
//         timeofvisit: 1200,
//     }))
//     .then(response => {
//         if (response.ok) {
//             randomNum++;
//             fetchRetry(newURL, 1000, 10);
//         } else if (response.status === 303) {
//             console.log("found valid random num! it is ", randomNum)
//         }
//     })
//     .catch(error => console.log(error))
// }