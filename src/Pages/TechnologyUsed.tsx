import React from 'react'

function TechnologyUsed() {

    const technologies = [
        {
            name: 'Python',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png'
        },
        {
            name: 'Android',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIJlobBNZqySgPmDeAWXYctcqbYSMQmEVmWZv4AaMAUyf9MKRxuEtnRfP9c-aDx6hAZs&usqp=CAU'
        },
        {
            name: 'Tensorflow',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/tensorflow.png'
        },
        {
            name: 'JavaScript',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
        },
        {
            name: 'JWT',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/jwt.png'
        },
        {
            name: 'GitHub',
            image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
        {
            name: 'VS Code',
            image: 'https://ih1.redbubble.net/image.1470587088.2816/st,small,507x507-pad,600x600,f8f8f8.jpg'
        },
        {
            name: 'Keras',
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEXQAAD////NAAD13Nz87+/wwMD12dnKAADuuLjXRUX9+Pjrra3XQkLvu7vWPz/vvr7ppKTcZGTbXl7aWFjZUlLYS0vonZ3mlpb55OTfdHTebW3xxsb00NDdZ2fts7Pmk5PTISHjhobhfHzSHBzVMTHRDw/VNTXfcHDUKip+QHsdAAAFFElEQVR4nO3da1fbMAwG4NilKQQYjDuU+4Dx/3/hekrHSmOJ1NbFyvR+pRg9JzmQRIppwtjTaBfAnv9D2LWTcabtVsJ2FseZWbsSTmIzzsSJC63HhfbjQvtxof240H5caD8utB8X2o8L7ceF9uNC+3Gh/bjQflxoPy60Hxfajwvtx4X240L7caH9kAm/DiKRLVS4WEMoPJyuZTd7sXgzn25kflpUGJFwucxa2szV4nVisJCgtGJhvN2sap61XPydAIbwo6A0GmGc9qs6ylgv3iSBWWv9W5RAGPdTZR1vvSBwBBdRF+6kqtp6QegILnJRcoJVI0SAoRuDEAMuKsxPLcJ4hwGn9o8hDsz70/N36SqEjMA6hHynaFOHkBVYg5AXWIEw/sSARRdsH+trC7mB6kJ2oLYwnmDAQ4onK7pCAaCuUAKoKsSB+c96Nn6KnlAGqCgUAuoJ4ykGvKd7Pq0lFANqCfFTlBKoJJQ7gkpCSaCKUBSoIYxnGHCfussnLxQGygulgeJCcaC0UB4oLFQAygpx4PbtuGHVCQrjuQJQUqgDFBQqAeWEWkAxoRpQSogDS9r031cnIox7akAZoSZQRKgKlBDqAgWEOPCSG8gvjAe6QHahOpBbqA9kFsYf6kBeIQ58EAGyCnHg1YyQgVXHKESBITxZP4btIw4M4Z3QgVTHJtzpvhNeGf9NMyDsV2zL6jSF4Y1QAlanKtwxfU0zKDwPgb9WpysMZ4QWoDplYcl7BgOrUxaSjB/i1WkLw53ZpxiDQ6hJVqcvvLX6rG14no0+L90ivwhB/erEhBP41a3cd2qHVSclXNwQH4Ff5LzdlxIuDxN8P/VCJ+pVJyP8+H0JDyQy3irKCFev9sRd8BMWe8Br+RxpjvB5ek7jSVQnIFy7RYLHTdhuFQWE6ydgvAc/Rj11+fkj2YVfn2wjnz0pxqSr4xZuPhWFG/pdIQWqjlnYu+ZMb8CwTNn7vmB1vMLrxHDbVp8uD68weXeL9IRf8yFwdZzC0/QQ7TEo5LhV5BSeQZPe8HnK0K1hFO6BKyJNqcfsKsDq+HpP8ILxAhTSX4IrvRV0BRLJuzVKb3a9gMKyTaFS1Sm9u3YJCqkvwdXeP5ykvmcZ4m6N2juk76AwlO1A16tO7S3ZB1BI261RfNMZPk9JuzWKb6sjsxo3hETN9/GfYGJ2LYkfo7mnQgsKCS/BVffFeIUPIl23Rnfnj2eYSNatUd69pbcr6FbfPqw63R14kPOUqlujvcdQas/ZVYgGptT3iZqDQqJLcG1h08AHkaZboy6EN54l6taoC9nPU30hdp5S7DRUgxDZN5GgW1ODEBlhIOjW1CDERhjKuzV1CJE9lYq7NXUIkRGG4m5NHUJshKF0YKoSYYNsrFTYralFiIwwFL5bU4sQa7mVdWuqESKjNmXdmnqEyAhDOMiurSYhdp6WXIJXJMRGGAq6NTUJkRGGgm5NTULsPM2/BK9KiI0wZO8+X5cQGWEI17nVVSXERhhyN7+uTNi8gcLH3Oo05mmwtaARhuwBW5L/2ZXc/X8vsyDgPM2+TaT5r2QJ4kHueukRhvw/+UT/Wa73GCIbCIwwFNRGIuwdxXxgujVccHdBJNxcVfG7e6uxCGuKC+3HhfbjQvtxof240H5caD8utB8X2o8L7ceF9uNC+3Gh/bjQflxoPy60Hxfajwvtx4X240L7caH9uNB+PoXtLI4zs3Yl7NrJONN2K+G440L7+QPK4U+zmdKNJQAAAABJRU5ErkJggg=='
        },
        {
            name: 'Figma',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
        }
    ]

    return (
        <section className='mt-5' id='Technologies'>
            <h1 style={{ marginLeft: '8%' }}>Technologies Used</h1>

            <div className=" mt-5" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <div className="row row-cols-md-12">
                    {technologies.map((technology) => (
                        <div className="col-xs-12 col-sm-2">
                            <div className="card d-flex flex-column h-100 mb-4" style={{ border: "0", marginLeft: '25%' }}>
                                <a className="img-card">
                                    <img src={technology?.image} alt='' style={{ padding: '30px', width: '100%', borderRadius: '50%', boxShadow: '1px 1px 10px 1px #D4D4D4' }} />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3 mt-3" style={{ fontSize: '16px' }}> {technology?.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TechnologyUsed