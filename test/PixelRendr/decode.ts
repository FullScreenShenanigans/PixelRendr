/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/PixelRendr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("returns a sprite", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();
    var sizing = {
        spriteWidth: "16",
        spriteHeight: "16"
    };

    // Act
    var sprite = PixelRender.decode("Box", sizing);

    // Assert
    chai.expect(sprite.length).to.equal(64);
});

mochaLoader.addTest("throws an error", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Assert
    chai.expect(PixelRender.decode.bind(PixelRender, "X")).to.throw("No sprite found for 'X'.");
});
