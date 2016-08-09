/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/PixelRendr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("processes the image into a string", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();
    var img = document.createElement("img");
    img.src = "square.png";
    console.log(img.width + " is the width of img");

    // Act
    var sprite = PixelRender.encode(img);

    // Assert
    chai.expect(sprite).to.equal("x16");
});

mochaLoader.addTest("calls the callback", (): void => {
    // Arrange
    var PixelRender = mocks.mockPixelRendr();
    var img = document.createElement("img");
    img.src = "square.gif";
    var num = 0;
    var callback = () => {
        num += 1;
    };

    // Act
    var sprite = PixelRender.encode(img, callback);

    // Assert
    chai.expect(num).to.equal(1);
});
