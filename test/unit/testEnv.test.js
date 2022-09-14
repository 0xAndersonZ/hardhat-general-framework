const { assert, expect } = require("chai")
const { ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Testing tokens", function () {
          let accounts, deployer, receiver, user
          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              receiver = accounts[1]
              user = accounts[2]
              
              // Deploy or fetch any deploy scripts with tag "all"
              await deployments.fixture(["all"])
          })

          describe("USDT", () => {
              let usdt

              beforeEach(async () => {
                  usdt = await ethers.getContract("TetherToken", deployer)
              })

              describe("USDT: constructor parameters are properly set", () => {
                  it("Descriptive parameters are correct", async () => {
                      const tokenName = await usdt.name()
                      assert.equal(tokenName, "Tether USD")
                      const tokenSymbol = await usdt.symbol()
                      assert(tokenSymbol === "USDT")
                      const tokenDecimals = await usdt.decimals()
                      assert.equal(tokenDecimals.toString(), "6")
                  })
              })

              describe("Basic IERC20 functions implementation", () => {
                it("Should transfer with the initial supply", async () => {
                    usdt = await ethers.getContract("TetherToken", deployer)
                    const initialSupplyDeployer = await usdt.balanceOf(deployer.address)
                    assert.equal(initialSupplyDeployer.toString(), "100")
                    const transferTx = await usdt.transfer(receiver.address, 50)
                    await transferTx.wait()
                    const deployerBalance = await usdt.balanceOf(deployer.address)
                    const receiverBalance = await usdt.balanceOf(receiver.address)
                    assert.equal(deployerBalance.toString(), "50")
                    assert.equal(receiverBalance.toString(), "50")
                })

                it("Revert with insufficient approval", async () => {
                    usdt = await ethers.getContract("TetherToken", deployer)
                    const usdtConnectedToUser = usdt.connect(user)
                    // In other cases, you might use ".to.be.revertedWith("message")" to capture the revert message
                    await expect(usdtConnectedToUser.transferFrom(deployer.address, receiver.address, 1)).to.be.reverted
                })

                it("Transferfrom with sufficient allowance", async () => {
                    usdt.once("Approval", async () => {
                        try {
                            const usdtConnectedToUser = usdt.connect(user)
                            const transferFromTx = await usdtConnectedToUser.transferFrom(deployer.address, receiver.address, 98)
                            await transferFromTx.wait(1)
                            const deployerBalance = await usdt.balanceOf(deployer.address)
                            const receiverBalance = await usdt.balanceOf(receiver.address)
                            assert.equal(deployerBalance.toString(), "2")
                            assert.equal(receiverBalance.toString(), "98")
                            const allowanceLeftFromDeployer = await usdt.allowance(deployer.address, user.address)
                            assert.equal(allowanceLeftFromDeployer.toString(), "1")
                            resolve()
                        } catch (e) {
                            console.log(e)
                            reject(e)
                        }
                    })
                    try {
                        const approveTx = await usdt.approve(user.address, 99)
                        await approveTx.wait()
                    } catch (e) {
                        console.log(e)
                        reject(e)
                    }
                })
              })
          })
      })
