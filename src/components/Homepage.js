import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Homepage() {
  return (
    <>
        <div>Homepage</div>
        <Header />
        <div className="main-content">
            <div className="homepage-cards">
                <div className="card-info">
                    <h4>Some title description</h4>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean bibendum ante laoreet posuere tincidunt. Maecenas eget sollicitudin est. Proin pulvinar nibh vitae ante auctor, vel iaculis sapien fringilla. Nullam congue pharetra arcu vitae malesuada. Sed orci eros, tristique a mattis quis, laoreet sed sapien. Aliquam vel velit eros. Integer placerat sapien vel posuere laoreet. Morbi tempor commodo lectus eu varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a risus vel quam dignissim iaculis. Aliquam erat volutpat.</p>
                    <button>Learn More</button>
                </div>
                <div className="card-pic">
                    <img src="./images/tea.png" alt="tea" />
                </div>
                <div className="card-pic">
                    <img src="./images/dairycows.jpg" alt="milk-cows" />
                </div>
                <div className="card-info">
                    <h4>Some title description</h4>
                    <p>Aenean metus ex, rutrum ut dictum vitae, ultrices a tellus. Duis mollis tristique enim in eleifend. Ut aliquet nunc pretium, facilisis erat at, fringilla dolor. Aliquam mattis leo magna, sit amet aliquet nulla hendrerit id. Cras quis ante quam. Pellentesque sit amet efficitur justo. Nam condimentum, metus sit amet molestie pulvinar, eros leo iaculis dolor, a venenatis est velit sed tellus. Nulla mi tellus, tempor quis ex sed, tincidunt vulputate odio. Sed tellus elit, malesuada id tempor sit amet, viverra id erat. Nulla non tortor vitae ex pulvinar viverra eu eu odio. Maecenas blandit justo eget egestas dignissim. Morbi dictum urna nec metus fermentum elementum rhoncus et mauris. Integer consectetur aliquet blandit. Maecenas porta augue eget orci fringilla porttitor.</p>
                    <button>Learn More</button>
                </div>
                <div className="card-info">
                    <h4>Some title description</h4>
                    <p>Pellentesque eget est a felis elementum commodo. Maecenas lobortis turpis eget quam pulvinar, non gravida odio pharetra. Aenean nisi mi, rutrum sit amet mi non, vulputate faucibus risus. Nam a finibus erat. Curabitur suscipit erat sit amet velit feugiat, sed mattis augue efficitur. Phasellus faucibus risus ut velit pellentesque semper. Integer dignissim rutrum congue. Sed rutrum est non tempus ultricies. In consequat cursus libero dapibus congue. In porta consectetur semper. Sed orci risus, efficitur ut libero a, fermentum faucibus sapien.</p>
                    <button>Learn More</button>
                </div>
                <div className="card-pic">
                    <img src="./images/Maize.jpg" alt="maize" />
                </div>
                <div className="card-pic">
                    <img src="./images/farm_aerial.jpeg" alt="farm-aerial-view" />
                </div>
                <div className="card-info">
                    <h4>Some title description</h4>
                    <p>Phasellus eu metus vel quam feugiat fringilla id vel quam. Sed maximus tellus rhoncus, elementum arcu id, iaculis nibh. Fusce convallis ante non consectetur mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque at semper quam. Maecenas eget risus nibh. Etiam vitae urna tincidunt, dictum mauris eget, dictum massa. Nulla facilisi. Nunc vel tellus nec eros pulvinar porta. Praesent ut viverra diam. Quisque faucibus, lacus quis pharetra placerat, nisi risus porttitor odio, at tempus arcu felis tincidunt risus. Etiam accumsan libero urna, ut molestie sapien suscipit et.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="call-to-action">
                <h2>Join the movement</h2>
                <p>If you would like to find out more about PesaFresh credits, find out how much you qualify for by taking the first step</p>
                <button>Register with us</button>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Homepage