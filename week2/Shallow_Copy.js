const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
};

// Create a shallow copy of user
const userCopy={...user}
console.log('user: ',user,' usercopy: ',userCopy)

// Change name in the copied object
userCopy.name='varshini'

// Change preferences.theme in the copied object
userCopy.preferences.theme='light'

// .Log both original and copied objects
console.log('user: ',user,' usercopy: ',userCopy)