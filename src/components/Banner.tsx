type Props = {
    page: string,
    text: string
};

function Banner({ page,text }: Props) {
    return (<section>
        <div className={`banner banner--${page}`}>
            {text === '' ? null : <h1>{text}</h1>}
        </div>
    </section>);
}

export default Banner;