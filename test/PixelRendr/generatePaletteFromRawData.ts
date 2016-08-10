/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/PixelRendr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("returns palettes as Uint8ClampedArray with a zero color at the front", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    var palette = PixelRender.generatePaletteFromRawData(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]), true);

    // Assert
    chai.expect(palette[0]).to.deep.equal(new PixelRender.Uint8ClampedArray([0, 0, 0, 0]));
});

mochaLoader.addTest("returns palettes as Uint8ClampedArray if forceZeroColor is false", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    var palette = PixelRender.generatePaletteFromRawData(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]));

    // Assert
    chai.expect(palette[0]).to.deep.equal(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]));
});

mochaLoader.addTest("returns palettes as arrays if forceZeroColor is false", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    var palette = PixelRender.generatePaletteFromRawData(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]), undefined, true);

    // Assert
    chai.expect(palette).to.deep.equal([[0, 9, 0, 8]]);
});

mochaLoader.addTest("returns palettes as arrays if forceZeroColor is true", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    var palette = PixelRender.generatePaletteFromRawData(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]), true, true);

    // Assert
    chai.expect(palette).to.deep.equal([[0, 0, 0, 0], [0, 9, 0, 8]]);
});
