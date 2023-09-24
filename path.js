const path = require('path')

// যদি আমরা ফাইল নেইম টা চাই তাহলে 
const myCurrentPath1 =  __filename
// console.log(path.basename(myCurrentPath1))

// যদি আমরা ডিরেকটরি নেইম চাই তাহলে 
const myCurrentPath =  __dirname

// console.log(path.basename(myCurrentPath))

// অনেক সময় এক্সট্রেনশন এর নাম আমাদের দরকার পরে সেক্ষেত্রে এই কারনে আমাদের রিজেক্স ব্যাবহার করতে হবে কিন্তু আমরা নোড জে এস এর মাদ্ধমে বের করে নিতে পারি এক্সট্রেনশন 

const information = __filename
// console.log(path.extname(information))



// FORMATE : আমরা মাই অবজেক্ট কে কনভার্ট করে নেচেরাল একটা স্ট্রিং এ কনভার্ট করতে চাচ্ছি তাহলে 

const myObj = {
    dir:'user/locale',
    name:'test',
    ext:'.js'
}

// console.log(path.format(myObj))

// Path Join 
// console.log(path.join('users','rubel','info.js'))

// কিভাবে আমরা এভসুলিউট পেথ পাবো বা বানাবো ? 

console.log(path.resolve(__dirname,'register','info.js'))

// যদি আমরা কারেন্ট পেথ টা কে পার্স করতে চাই তাহলে 

console.log(path.parse(myCurrentPath))