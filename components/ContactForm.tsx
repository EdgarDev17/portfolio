const ContactForm = () => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <p className={'my-5 text-3xl font-semibold text-blue-500'}>
                Get in touch!
            </p>

            <p className={'mt-5 text-center'}>
                If you are interested in my work you can send me an E-mail,
            </p>
            <p className={'mb-10 text-center'}>
                Whether you have a question just contact me.
            </p>

            <a
                className={'my-5 rounded-md bg-blue-500 px-5 py-5 text-white'}
                href={'mailto:edgardorodriguezdev@gmail.com'}
            >
                Contact me
            </a>
        </div>
    )
}

export default ContactForm
