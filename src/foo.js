import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

class InsertImage extends Plugin {
  init() {
    console.log("InsertImage was initialized");

    const editor = this.editor;
    const {
      t,
      ui: { componentFactory },
    } = editor;

    componentFactory.add("insertImage", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: t("Insert Image"),
        icon: imageIcon,
        tooltip: true,
      });

      view.on("execute", () => {
        const imageURL = prompt(t("Image URL"));
      });

      return view;
    });
  }
}

export default InsertImage;
