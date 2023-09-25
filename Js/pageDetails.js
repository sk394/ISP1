document.querySelector(".pageUrl").innerHTML ="<span>Page URL is : </span>" + window.location.href;
document.querySelector(".pageHost").innerHTML ="<span>Page hostname is : </span>" + window.location.hostname;
document.querySelector(".pagePath").innerHTML ="<span>Page pathname is : </span>" + window.location.pathname;

//browser details
navigator.saysWho = (() => {
    const { userAgent } = navigator
    let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    let temp
  
    if (/trident/i.test(match[1])) {
      temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []
  
      return `IE ${temp[1] || ''}`
    }
  
    if (match[1] === 'Chrome') {
      temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('OPR', 'Opera')
      }
  
      temp = userAgent.match(/\b(Edg)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
      }
    }
  
    match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
    temp = userAgent.match(/version\/(\d+)/i)
  
    if (temp !== null) {
      match.splice(1, 1, temp[1])
    }
  
    return match.join(' ')
  })();
document.querySelector(".browserName").innerHTML =
"<span>Your browser is:</span>" + navigator.saysWho;
document.querySelector(".os").innerHTML =
"<span>Your OS is:</span>" + navigator.userAgentData.platform
document.querySelector(".browserPlatform").innerHTML ="<span>Browser platform is: </span> " + navigator.platform;

//screen details
document.querySelector(".screenWidth").innerHTML = "<span>Your Screen width is: </span>" + screen.width;
document.querySelector(".screenHeight").innerHTML = "<span>Your Screen height is: </span>" + screen.height;

function tellPos(p) {
  document.querySelector(".mouseRun").innerHTML = '<span>Your Cursor is at Position X : </span>' + p.pageX + ' <span>Position Y : </span>' + p.pageY;
}
addEventListener('mousemove', tellPos, false);