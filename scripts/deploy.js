const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const MyNft = await ethers.getContractFactory("MyNft");
    const deployed = await MyNft.deploy();

    console.log("Contract deployed at:", deployed.address);
}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });