export default function HeroSection()
{
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> hey, im john</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">fullstack</span>{" "}
                    <br/>
                    Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br/>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                   </div>
                   <button className="btn btn-primary">get in touch</button>
            
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="hero section"></img>
            </div>
        </section>

    )
}

