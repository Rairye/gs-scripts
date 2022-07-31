/*
MIT License

Copyright (c) 2022 Rairye

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//Documentation:
//Extracts the parts of an e-mail adddress in the sender_name<email_name@domain_name> or email_name@domain_name format.
//Note: This might not work with other formats.
//senderInfo should be passed as a string.
//Returns the emailInformation object with the following attributes (if present in the senderInfo)
// emailInformation.senderName -> The name of the sender.
// emailInformation.emailAddress -> The e-mail address (excluding the name of the sender)
// emailInformation.emailName -> The name of the e-mail address (before the @ symbol)
// emailInformation.domainName  -> The domain of the e-mail address (after the @ symbol)

function getSenderInformation(senderInfo) {
    senderInfo = senderInfo.trim()
    emailInformation = new Object()
    emailInformation.senderName = null
    emailInformation.emailAddress = null
    emailInformation.emailName = null
    emailInformation.domainName = null

    lastCarrotIndex = senderInfo.lastIndexOf("<")

    senderNameRaw = senderInfo.substring(0, lastCarrotIndex)
    emailAddressRaw = lastCarrotIndex > -1 ? senderInfo.substring(lastCarrotIndex + 1, senderInfo.length - 1) : senderInfo

    emailInformation.emailAddress = emailAddressRaw
    emailInformation.senderName = senderNameRaw.trim()

    lastAtIndex = emailAddressRaw.lastIndexOf("@")

    emailInformation.emailName = emailAddressRaw.substring(0, lastAtIndex)
    emailInformation.domainName = emailAddressRaw.substring(lastAtIndex + 1)
    
    return emailInformation
}
