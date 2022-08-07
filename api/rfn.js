import fetch from 'isomorphic-fetch';

export default async function buildSurveyURL(data) {
    let survey, keyword, rfnLen;
    let baseURL = "https://shielded-beach-28637.herokuapp.com/https://feedback.inmoment.com/websurvey/2/begin";
    
    survey = data.storenum + data.termnum + data.transid;
    keyword = data.year + data.month + data.day + data.secret
    rfnLen = survey + keyword + '1'
            // lazy check to make sure RFN has correct amount of numbers
            if (rfnLen.length !== 22) {
                throw Error("invalid input: expected input length 22, got: ", rfnLen.length)
            }

    for (let randomNum = 0; randomNum < 9; randomNum++) {
        let fullURL = baseURL + '?gateway=WalgreensQR&survey=' + survey + '&keyword=' + randomNum + keyword + "&timeofvisit=1200";
        console.log("BUILT URL: ", fullURL);
        let currentRFN = survey + randomNum + keyword;
        console.log("CURRENT RFN IS: ", currentRFN);

        const response = await fetch(fullURL);

        let finalURL = response.headers.get('X-Final-Url');
        if (finalURL.includes("execute")) {
            console.log("WE GOT A VALID RFN!")
            return survey + randomNum + keyword
        }
        console.log("we didn't get a valid RFN")
    }
}