var userType, userNum, odd, i;

// IF

// userType = window.prompt("(admin, moderator, advertiser, user )?");
// if (userType == 'admin') {
//     window.alert("Hello admin")
// } else if (userType == 'moderator') {
//     window.alert("Hello moderator")
// } else if (userType == 'advertiser') {
//     window.alert("Hello advertiser")
// } else {
//     window.alert("Hello user")
// };

// Switch case

// userType = window.prompt("(admin, moderator, advertiser, user )?");
// switch (userType) {
//     case 'admin':
//         window.alert("Hello admin")
//         break;
//     case 'moderator':
//         window.alert("Hello moderator")
//         break;
//     case 'advertiser':
//         window.alert("Hello advertiser")
//         break;
//     default:
//         window.alert("Hello user")
// };

// Loops 
// For

userNum = window.prompt("Enter Your Number")

for (i = 4; i <= userNum; i++) {
    var num = i % 2;
    if (num == 0) {
        console.log(i + ' Even Number')
    } else {
        console.log(i + ' Odd Number')
    }


};