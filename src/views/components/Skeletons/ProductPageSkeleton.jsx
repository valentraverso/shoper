import { Skeleton } from "@mui/material";
import AddToCart from "../Buttons/AddToCart/AddToCart";
import ProductSectionSkeleton from "./ProductSectionSkeleton";

export default function ProductPageSkeleton() {
    return (
        <section className='product-page__section'>
            <div className="top-product-section__div">
                <Skeleton width={100}>
                    <div className='top-product-img__div'>
                        <img className='top-product-img__img' />
                    </div>
                </Skeleton>
                <div className='top-product-info__div'>
                    <Skeleton>
                        <h1></h1>
                    </Skeleton>
                    <div className='add-quantity-product__div'>
                        <Skeleton>
                            <div className='add-quantity-product-title__div'>
                                <span>Quantity</span>
                            </div>
                        </Skeleton>
                        <Skeleton>
                            <span className="quantity-handler__span">-</span>
                            <span className='quantity-visor__span'>0</span>
                            <span className="quantity-handler__span">+</span>
                        </Skeleton>
                    </div>
                    <div>
                        <Skeleton>
                            <AddToCart text='Add To Cart' />
                        </Skeleton>
                    </div>
                </div>
            </div>
            <div className="description-product-section__div">
                <Skeleton height={100}>
                    <h2>Description</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae varius lacus, ut aliquet nulla. In sed magna quis risus rutrum porttitor vitae nec lacus. Suspendisse vulputate leo vel nisl tincidunt interdum. Aliquam tincidunt, turpis non dapibus fringilla, ex arcu rhoncus lacus, non tempor enim tortor eget eros. Morbi porttitor mattis dui, et porta purus lacinia sed. Sed non maximus felis. Nunc vel imperdiet turpis. Phasellus mattis eros in lacus efficitur hendrerit. Vestibulum euismod egestas eros, ac ultricies mauris eleifend a. Duis rutrum dolor nec ante tempus luctus. Vivamus dapibus quam a lacus iaculis, eget tempor augue consequat. Phasellus nibh diam, dapibus nec aliquam sit amet, scelerisque a eros. Vestibulum a rhoncus ipsum.
                    </p>
                    <p>
                        Suspendisse malesuada purus facilisis nisl gravida pretium. Aliquam erat volutpat. Cras ac interdum turpis. Vestibulum tincidunt, odio a molestie pretium, urna est luctus ipsum, ut tristique tortor dolor nec urna. Mauris eleifend odio erat, quis rutrum nisi ornare id. Donec efficitur, ligula a tincidunt hendrerit, erat diam blandit quam, vitae elementum leo libero eget urna. In eleifend porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna nec neque suscipit tristique at a neque. Maecenas sed placerat erat. Curabitur eleifend lacinia efficitur. Sed tristique ac ligula eget blandit. Duis congue ligula in mattis lacinia. Quisque fringilla interdum ante, vitae consequat dui porta at.
                    </p>
                    <p>
                        Vestibulum turpis velit, posuere vel purus vitae, eleifend luctus libero. Nullam congue risus lectus, eget vehicula ipsum tristique ut. Vestibulum mattis lorem sed scelerisque imperdiet. Aliquam erat volutpat. Mauris hendrerit dapibus luctus. Nullam condimentum odio ex, ut gravida nisl convallis vel. Vivamus a erat erat. Nulla vel justo in velit imperdiet laoreet in ut sapien. Praesent malesuada lacinia felis a imperdiet. Donec luctus nibh leo, eu finibus arcu vulputate dapibus. Vestibulum eu felis sed justo interdum lacinia nec pellentesque augue. Nullam blandit id magna dapibus sodales. Aliquam id facilisis risus. Nullam vel dignissim erat.
                    </p>
                    <p>
                        Aenean mi mi, ornare et urna sed, tristique sagittis nisl. Aenean sollicitudin ex sed tempus tempus. Maecenas non dictum augue. Nunc pulvinar lacus neque, vel auctor ligula aliquam vitae. Aliquam erat volutpat. Aenean eget ligula est. Curabitur ac convallis diam. Suspendisse rutrum urna ex, eu fringilla enim vehicula nec. Curabitur scelerisque ligula augue, consequat vehicula nulla dictum sit amet. Sed augue massa, rhoncus tempus justo quis, scelerisque ultrices mauris. Morbi euismod pretium nisi ut ullamcorper. Integer pharetra eleifend metus, non vulputate velit blandit eu.
                    </p>
                    <p>
                        Etiam condimentum, est condimentum luctus pharetra, justo nunc blandit leo, in scelerisque massa tortor dictum risus. Cras eget diam sollicitudin, luctus dui ut, rutrum nulla. Pellentesque sit amet tellus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus, nibh id eleifend iaculis, lorem elit volutpat massa, sit amet luctus metus turpis in sem. Cras rhoncus purus quis nisl viverra, a interdum nunc semper. Morbi consectetur lacinia tellus, quis consequat eros dignissim at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </Skeleton>
            </div>
            <ProductSectionSkeleton productsCards="products-section-cards-4__div" />
        </section>
    )
}