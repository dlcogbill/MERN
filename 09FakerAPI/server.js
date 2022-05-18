const {faker} = require("@faker-js/faker");
const express = require("express");//import the express module
const app = express();//invoke an instance of express
const PORT = 8000;

//middlewares to parse the body into json
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

const users = [];
const companies = [];
const createUser = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    
    const newFake = {
        _id: faker.random.numeric(5),
        firstName: firstName,
        lastName:  lastName,
        password: faker.internet.password(10),
        email: faker.internet.email(firstName, lastName),
        phoneNumber: faker.phone.phoneNumber()
    };
    users.push(newFake);
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.random.numeric(5),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode('#####'),
            country: faker.address.country()
        }
    };
    companies.push(newFake);
    return newFake;
};

app.get("/api/users/new", (req,res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser)
});

app.get("/api/companies/new", (req,res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req,res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json( { newFakeUser, newFakeCompany });
});

app.get("/api/users", (req,res) => {
    res.json(users);
});

app.get("/api/companies", (req,res) => {
    res.json(companies);
});

app.listen(PORT, ()=> {
    console.log('You have successfully connected to port 8000');
});