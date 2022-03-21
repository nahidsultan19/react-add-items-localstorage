const addToStorage = (name) => {
    let usersList = {}

    //get users
    const storedUser = localStorage.getItem('users');
    if (storedUser) {
        usersList = JSON.parse(storedUser)
    } else {
        usersList = {};
    }


    //add quantity 
    const quantity = usersList[name];
    if (quantity) {
        const newQuantity = quantity + 1;
        // localStorage.setItem(name, newQuantity)
        usersList[name] = newQuantity;
    } else {
        usersList[name] = 1;
        // localStorage.setItem(name, 1);
    }
    localStorage.setItem('users', JSON.stringify(usersList));

}

export { addToStorage };