/* 
Add the icon name and style as CSS classes to an HTML <i> tag.

fa-spin	Makes an icon spin 360° clockwise

*/

export const iconBar = () => {
    return `
        <div class="icon">
            <i class="fa-brands fa-pinterest fa-sm fa-spin"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-yelp fa-lg fa-spin fa-spin-reverse"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-square-tumblr fa-2xl fa-spin"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-vine fa-2xl fa-spin-pulse"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-etsy fa-lg fa-spin-pulse fa-spin-reverse"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-amazon fa-sm fa-spin fa-spin-reverse"></i>
        </div>
        `
}