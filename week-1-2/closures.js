// counter:

const createCounter = () => {
    let count = 0;

    function increment() {
        ++count;
        return count;
    }
    return increment;
}

const countingStars = createCounter();

// console.log(countingStars());
// console.log(countingStars());
// console.log(countingStars());
// console.log(countingStars());

// create like counter:

function createLikeCounter () {
    let likeCount = 0;

    function like() {
        ++likeCount;
        return likeCount;
    }
    return like;
}

const likePost1 = createLikeCounter();
const likePost2 = createLikeCounter();
// console.log(likePost1());
// console.log(likePost1());
// console.log(likePost2());
// console.log(likePost2());
// console.log(likePost1());

// bank account:

function createAccount () {
    let balanceAmount = 0;

    function balance () {
        return balanceAmount;
    }
    function deposit(amt) {
        balanceAmount += amt;
        return balanceAmount;
    }
    function withdraw(amt) {
        if (amt > balanceAmount) return "Insufficient balance!";
        balanceAmount -= amt;
        return balanceAmount;
    }
    return { balance, deposit, withdraw };
}

const account = createAccount()

console.log(account.balance());
console.log(account.deposit(100));
console.log(account.withdraw(120));
console.log(account.balance());
console.log(account.deposit(150));
console.log(account.balance());
console.log(account.withdraw(120));
console.log(account.balance());