import Image from "@ckeditor/ckeditor5-image/src/image";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Paragraph, Bold, Italic, Image],
});
