function tag(price){
    // If price < 500 → "Budget Course"
    if(price<500)
        return 'Budget Course'

    // If price between 500–1000 → "Standard Course"
    else if(price>=500 && price<=1000)
        return "Standard Course"

    // If price > 1000 → "Premium Course"
    else if(price>1000)
        return 'Premium Course'
}
let price=600

// Store label in courseTag
let courseTag=tag(price)

// Print the label
console.log(courseTag)