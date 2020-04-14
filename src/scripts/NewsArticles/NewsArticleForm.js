export const newArticle = () => {
    return `
   <dialog>
        <fieldset class="onTop">
            <label for="title" class="onTop">Title</label>
            <input type="text" name="title" id="title" class="onTop">
        </fieldset>
        <fieldset class="onTop">
            <label for="synopsis">Synopsis</label>
            <textarea name="" id="" cols="10" rows="4"></textarea>
        </fieldset>
        <fieldset class="onTop">
            <label for="website" class="onTop">Website</label>
            <input type="text" name="website" id="website" class="onTop">
        </fieldset>
       </dialog>
       
    `
}