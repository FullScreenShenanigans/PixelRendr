import { mochaLoader } from "../main";
import { stubPixelRendr, stubSpriteName } from "../utils/fakes";

mochaLoader.it("resets the library to a blank library", (): void => {
    // Arrange
    const PixelRender = stubPixelRendr();

    // Act
    PixelRender.resetLibrary();

    // Assert
    chai.expect(PixelRender.getLibrary().raws).to.deep.equal({});
    chai.expect(PixelRender.getLibrary().sprites).to.deep.equal({});
});

mochaLoader.it("sets the raw of the library", (): void => {
    // Arrange
    const PixelRender = stubPixelRendr();
    const library = {
        [stubSpriteName]: "x14"
    };

    // Act
    PixelRender.resetLibrary(library);

    // Assert
    chai.expect(PixelRender.getLibrary().raws).to.deep.equal(library);
});