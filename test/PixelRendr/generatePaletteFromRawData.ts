/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/PixelRendr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("throws an error if the given array is not a multiple of 4", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Assert
    chai.expect(PixelRender.generatePaletteFromRawData.bind(PixelRender, [0, 9, 0])).to.throw("undefined is not a constructor (evaluating 'data.subarray(i, i + 4)')");
});

mochaLoader.addTest("returns a zero color at the front", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    var palette = PixelRender.generatePaletteFromRawData(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]), true);

    // Assert
    chai.expect(palette[0]).to.deep.equal(new PixelRender.Uint8ClampedArray([0, 0, 0, 0]));
});

mochaLoader.addTest("returns an array", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();

    // Act
    var palette = PixelRender.generatePaletteFromRawData(new PixelRender.Uint8ClampedArray([0, 9, 0, 8]), undefined, true);

    // Assert
    chai.expect(palette).to.deep.equal([[0, 9, 0, 8]]);
});
