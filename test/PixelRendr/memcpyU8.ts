/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/PixelRendr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("copies members of an array of equal length", (): void => {
    // Arrange
    let PixelRender = mocks.mockPixelRendr();
    let receiver = [0, 0, 0];
    let donor = [2, 3, 5];

    // Act
    PixelRender.memcpyU8(donor, receiver);

    // Assert
    chai.expect(donor).to.deep.equal(receiver);
});

mochaLoader.addTest("does not copy to an array of length 0", (): void => {
    // Arrange
    let PixelRender = mocks.mockPixelRendr();
    let receiver = [];
    let donor = [2, 3, 5];

    // Act
    PixelRender.memcpyU8(donor, receiver);

    // Assert
    chai.expect(receiver).to.deep.equal([]);
});

mochaLoader.addTest("does not change receiver if donor has length 0", (): void => {
    // Arrange
    let PixelRender = mocks.mockPixelRendr();

    // Act
    let receiver = [0, 0, 0];
    let donor = [];

    // Assert
    chai.expect(receiver).to.deep.equal([0, 0, 0]);
});

mochaLoader.addTest("copies all of the donor's elements if its length is less than the receiver's", (): void => {
    // Arrange
    let PixelRender = mocks.mockPixelRendr();
    let receiver = [0, 0, 0];
    let donor = [2, 3];

    // Act
    PixelRender.memcpyU8(donor, receiver);

    // Assert
    chai.expect(receiver).to.deep.equal([2, 3, 0]);
});

mochaLoader.addTest("changes all of the receiver's elements if its length is less than the donor's", (): void => {
    // Arrange
    let PixelRender = mocks.mockPixelRendr();
    let receiver = [0, 0];
    let donor = [2, 3, 5];

    // Act
    PixelRender.memcpyU8(donor, receiver);

    // Assert
    chai.expect(receiver).to.deep.equal([2, 3]);
});
