import Link from "next/link";


const OtherQuestions = () => {
    return(
        <section id="other">
            <div className="container">
                <div className="row-site">
                    <p>Still Have Question? Contact Us</p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </section>
    )
}

export default OtherQuestions;