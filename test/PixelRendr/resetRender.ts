/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/PixelRendr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("throws an error", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Assert
    chai.expect(PixelRender.resetRender.bind(PixelRender, "X")).to.throw("No render found for 'X'.");
});

mochaLoader.addTest("resets sprites", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    PixelRender.resetRender("Box");

    // Assert
    chai.expect(PixelRender.BaseFiler.get("Box").sprites).to.deep.equal({})
});
