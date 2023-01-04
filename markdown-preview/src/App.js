const App = () => {
    const initial = "# You can edit the content at left! \n## This is a sub-heading...\n\### There's also [links](https://github.com/JoseHung)\n";

    const [content, setContent] = React.useState(initial);
    const [markdown, setMarkdown] = React.useState();

    React.useEffect(() => {
        setMarkdown(marked.parse(content));
    });

    const onChangeHandler = event => {
        const presentContent = event.target.value;
        setContent(presentContent);
        const presentMarkdown = marked.parse(presentContent);
        setMarkdown(presentMarkdown);  
    };

    return (
        <div>
            <textarea id="editor" onChange={onChangeHandler} value={content} />
            <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
        </div>
    );
};