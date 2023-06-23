function HousingTag({ tag }: { tag: string }) {
    return (<div className="housing-tag">
        <span className="housing-tag__text">{tag}</span>
    </div>);
}

export default HousingTag;