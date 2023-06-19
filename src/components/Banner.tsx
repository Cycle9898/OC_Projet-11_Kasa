type Props = {
    page: string,
    text?: string
};

function Banner({ page,text }: Props) {
    return (<section>
        <div className={`banner banner--${page}`}>
            {text && <h1>{text}</h1>}
        </div>
    </section>);
}

export default Banner;