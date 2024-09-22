async function connectToDatabase(databaseName) {
    console.log(`Connecting to database: ${databaseName}`);
};

async function saveToDatabase(databaseName) {
    console.log(`Saving to database: ${databaseName}`);
};

const databaseType = {
    "userType": "admin",
    "typeData": "datalocal",
}

export {
    connectToDatabase,
    saveToDatabase,
    databaseType,
};
