// 1 Mean true, 0 means false
let isGuest1Vegan = 1;
let isGuest2Vegan = 0;

if (isGuest1Vegan && isGuest2Vegan) {
    console.log('Here is VEGAN dishes')
}
else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('Here is our full menue with VEGAN dishes')
}
else {
    console.log('Here is our full menue')
}