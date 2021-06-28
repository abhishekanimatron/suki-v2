# Suki - Suki Market

A tsuki market clone (Clothing Brand) by Marzia & Pewdiepie.

Deployed app:
https://suki-196e4.web.app/

Demo Video:
https://youtu.be/Tt3xiPwXXD8

Visit the original site here:
https://tsuki.market

# suki-v2

<table>

  <tr>
      <td><img src="screenshots/sukiss (7).png" alt="7" width = 300px ></td>
      <td><img src="screenshots/sukiss (8).png" alt="8" width = 300px ></td>
      <td><img src="screenshots/sukiss (9).png" alt="9" width = 300px ></td>
  </tr>
   <tr>
      <td><img src="screenshots/sukiss (3).png" alt="3" width = 300px ></td>
      <td><img src="screenshots/sukiss (4).png" alt="4" width = 300px ></td>
      <td><img src="screenshots/sukiss (6).png" alt="6" width = 300px ></td>
  </tr>

  <tr>
    <td> <img src="screenshots/sukiss (1).png"  alt="1" width = 300px ></td>
    <td><img src="screenshots/sukiss (13).png" alt="113" width = 300px ></td>
    <td><img src="screenshots/sukiss (5).png" alt="5" width = 300px ></td>
   </tr> 
  <tr>
      <td><img src="screenshots/sukiss (10).png" alt="10" width = 300px ></td>
      <td><img src="screenshots/sukiss (11).png" alt="11" width = 300px ></td>
      <td><img src="screenshots/sukiss (12).png" alt="12" width = 300px ></td>
  </tr>
  <tr>
      <td><img src="screenshots/sukiss (14).png" alt="10" width = 300px ></td>
      <td><img src="screenshots/sukiss (15).png" alt="11" width = 300px ></td>
  </tr>
</table>

Folder Structure:

- **src**
  - [App.css](src/App.css)
  - [App.js](src/App.js)
  - **app**
    - [store.js](src/app/store.js)
  - **components**
    - [FreeShip.js](src/components/FreeShip.js)
    - [Header.js](src/components/Header.js)
    - [Navbar.js](src/components/Navbar.js)
    - [Search.js](src/components/Search.js)
    - **account**
      - [Login.js](src/components/account/Login.js)
      - [Signup.js](src/components/account/Signup.js)
    - **cart**
      - [CheckoutProduct.js](src/components/cart/CheckoutProduct.js)
      - **popup**
        - [CheckoutPopup.js](src/components/cart/popup/CheckoutPopup.js)
        - [PopupContent.js](src/components/cart/popup/PopupContent.js)
      - [switchIos.js](src/components/cart/switchIos.js)
    - **footer**
      - [FollowFooter.js](src/components/footer/FollowFooter.js)
      - [Footer.js](src/components/footer/Footer.js)
      - [FooterLinks.js](src/components/footer/FooterLinks.js)
    - **home**
      - [BasicWall.js](src/components/home/BasicWall.js)
      - [ImageCarousel.js](src/components/home/ImageCarousel.js)
      - [LandItems.js](src/components/home/LandItems.js)
      - [LandShopTrio.js](src/components/home/LandShopTrio.js)
      - [Testimonial.js](src/components/home/Testimonial.js)
    - [loading.js](src/components/loading.js)
    - **stripe\-button**
      - [stripe\-button.js](src/components/stripe-button/stripe-button.js)
  - **constants**
    - [routes.js](src/constants/routes.js)
  - **context**
    - [firebase.js](src/context/firebase.js)
  - **data**
    - [data.js](src/data/data.js)
  - [index.css](src/index.css)
  - [index.js](src/index.js)
  - **lib**
    - [firebase.js](src/lib/firebase.js)
  - **pages**
    - [AnimalCrossing.js](src/pages/AnimalCrossing.js)
    - [Cart.js](src/pages/Cart.js)
    - [Home.js](src/pages/Home.js)
    - [Product.js](src/pages/Product.js)
    - [Responsibility.js](src/pages/Responsibility.js)
    - **account**
      - [CreateAccount.js](src/pages/account/CreateAccount.js)
      - [Login.js](src/pages/account/Login.js)
    - **collections**
      - [AllProducts.js](src/pages/collections/AllProducts.js)
      - [Blackmoon.js](src/pages/collections/Blackmoon.js)
      - [SukiSpace.js](src/pages/collections/SukiSpace.js)
    - [notFound.js](src/pages/notFound.js)
  - **services**
    - [firebase.js](src/services/firebase.js)
  - **slices**
    - [basketSlice.js](src/slices/basketSlice.js)
