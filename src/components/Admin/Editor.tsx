import React, { useEffect, useState } from "react";
import "../css/admin.scss";
import { Editor } from "@tinymce/tinymce-react";
import ItemService from "../../services/item.service";
import File from "./File";

interface Item {
  _id: string | number;
  type: string;
  name: string;
  logo: string;
  description: string;
  author: string;
  time: string;
  content: any;
}

interface IProps {
  item: number | null;
  type: string;
}

interface State {
  editor: any;
  type: string;
  name: string;
  items: any;
  isEmptyEditor: boolean;
  item: Item | null;
}

const EditorComponent: React.FC<IProps> = (props) => {
  const [state, setState] = useState<State>({
    editor: null,
    type: "skazki",
    name: "Сказки",
    items: [],
    isEmptyEditor: false,
    item: null,
  });

  useEffect(() => {
    (async function () {
      ItemService.getItems(props.type).then((res: any) => {
        setState((prev) => ({
          ...prev,
          items: res.data.length ? res.data : null,
        }));
      });
    })();
  }, []);

  const create = () => {
    // @ts-ignore
    // let file = document.querySelector('input[type="file"]').files[0];
    // let item: Item | undefined = undefined;
    // if (props.item) item = props.item;
    // if (item) {
    //   // item.name = document.querySelector('input[name="name"]').value;
    //   // @ts-ignore
    //   item.description = document.querySelector(
    //     'textarea[name="description"]'
    //     // @ts-ignore
    //   ).value;
    //   // @ts-ignore
    //   item.author = document.querySelector('textarea[name="author"]').value;
    //   item.type = props.type;
    //   item.content = state.editor.getContent();
    //   item.logo = file ? file.name : item?.logo;
    // }
    //
    // if (file) ItemService.uploadLogo(file);
    // if (props.item) {
    //   ItemService.updateItem(item, props.item._id);
    // } else {
    //   ItemService.createItem(item);
    // }
  };

  const changeType = (e: any) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      type: e.target.dataset.type,
      name: e.target.dataset.name,
    }));
  };

  // componentWillReceiveProps(nextProps: any) {
  //     if (!nextProps.item && this.state.editor) {
  //         this.state.editor.setContent("");
  //         this.setState({
  //             item: null,
  //         });
  //         document.querySelector('input[name="name"]').value = "";
  //         document.querySelector('textarea[name="description"]').value = "";
  //         document.querySelector('textarea[name="author"]').value = "";
  //     }
  // }

  return (
    <div className="flex">
      <div className="admin-content__main-view">
        <div className="input-field">
          <label htmlFor="name">Название*:</label>
          <input
            type="text"
            name="name"
            defaultValue={state.item ? state.item.name : ""}
          />
        </div>
        <div className="input-field">
          <label htmlFor="description">Описание*:</label>
          <textarea
            name="description"
            rows={2}
            defaultValue={state.item ? state.item.description : ""}
          />
        </div>
        <div className="input-field">
          <label htmlFor="author">Автор*:</label>
          <textarea
            name="author"
            rows={2}
            defaultValue={state.item ? state.item.author : ""}
          />
        </div>
        <div className="input-field">
          <label htmlFor="time">Время чтения:</label>
          <input
            type="text"
            name="time"
            defaultValue={state.item ? state.item.time : ""}
          />
        </div>
      </div>

      <form className="logo-form">
        <label className="input-field" htmlFor="file">
          Лого:
        </label>
        <input
          type="file"
          name="file"
          onChange={(event: any) => {
            let file = event.target.files[0];
            // @ts-ignore
            document.querySelector(".file-preview img").src =
              URL.createObjectURL(file);
          }}
        />
        <div className="file-preview">
          <img
            src={
              state.item
                ? `http://50.16.171.79:4000/api/image/${state.item.logo}`
                : ""
            }
            alt=""
          />
        </div>
      </form>

        <div className="input-field">
            <label htmlFor="type">Аудио:</label>
            {/*// @ts-ignore*/}
            <File item={state.item} type={props.type} />
        </div>

      <br />
      <h4>Контент</h4>
      <Editor
        apiKey={"3ryhlrvq3aoc9k85vwcd3whyab8ymbw9zilyvgpvsrqibosx"}
        onInit={(evt, editor) => (state.editor = editor)}
        initialValue=""
        init={{
          // @ts-ignore
          selector: "textarea#open-source-plugins",
          plugins:
            "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
          editimage_cors_hosts: ["picsum.photos"],
          menubar: "file edit view insert format tools table help",
          toolbar:
            "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          toolbar_sticky: true,
          toolbar_sticky_offset: 108,
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          image_advtab: true,
          block_unsupported_drop: false,
          media_live_embeds: true,
          file_picker_types: "file image media",
          media_alt_source: true,
          link_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" },
          ],
          importcss_append: true,
          // file_picker_callback: function (cb, value, meta) {
          //   var input = document.createElement("input");
          //   input.setAttribute("type", "file");
          //   input.setAttribute("accept", "image/*");
          //   input.onchange = function () {
          //     var file = files[0];
          //
          //     var reader = new FileReader();
          //     reader.onload = function () {
          //       var id = "blobid" + new Date().getTime();
          //       var blobCache = me.state.editor.editorUpload.blobCache;
          //       var base64 =
          //         typeof reader.result === "string" &&
          //         reader.result?.split(",")[1];
          //       var blobInfo = blobCache.create(id, file, base64);
          //       blobCache.add(blobInfo);
          //       cb(blobInfo.blobUri(), { title: file.name });
          //     };
          //     reader.readAsDataURL(file);
          //   };
          //
          //   input.click();
          // },
          templates: [
            {
              title: "New Table",
              description: "creates a new table",
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
            },
            {
              title: "Starting my story",
              description: "A cure for writers block",
              content: "Once upon a time...",
            },
            {
              title: "New list with dates",
              description: "New List with dates",
              content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
            },
          ],
          template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
          template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
          height: 600,
          image_caption: true,
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          noneditable_class: "mceNonEditable",
          toolbar_mode: "sliding",
          contextmenu: "link image table",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
          init_instance_callback: function (editor) {
            if (state.item) {
              editor.setContent(state.item.content);
            }
          },
        }}
      />
      <button className="btn btn-light" onClick={create}>
        Сохранить
      </button>
    </div>
  );
};

export default EditorComponent;
