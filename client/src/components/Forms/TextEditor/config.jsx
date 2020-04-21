import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";

export const EditorConfigDefault = {
    paragraph: {
        toolbox: {
            title: 'Текст'
        }
    },
    list: {
        class: List,
        toolbox: {
            title: 'Список'
        },
        inlineToolbar: true
    }
};

export const EditorConfigCharts = {
    paragraph: {
        toolbox: {
            title: 'Текст'
        }
    },
    list: {
        class: List,
        toolbox: {
            title: 'Список'
        },
        inlineToolbar: true
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        toolbox: {
            title: 'Цитата'
        },
        config: {
            quotePlaceholder: 'Напишите цитату',
            captionPlaceholder: 'Укажите автора цитаты',
        }
    }
};

export const EditorConfigReview = {
    paragraph: {
        toolbox: {
            title: 'Текст'
        }
    },
    header: {
        class: Header,
        inlineToolbar: true,
        toolbox: {
            title: 'Заголовок'
        },
        config: {
            placeholder: 'Заголовок',
        }
    },
    SimpleImage: {
        class: SimpleImage,
        inline: true
    },
    list: {
        class: List,
        toolbox: {
            title: 'Список'
        },
        inlineToolbar: true
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        toolbox: {
            title: 'Цитата'
        },
        config: {
            quotePlaceholder: 'Напишите цитату',
            captionPlaceholder: 'Укажите автора цитаты (не обязательно)',
        }
    },
    warning: {
        class:  Warning,
        inlineToolbar: true,
        toolbox: {
            title: 'Основная мысль'
        },
        config: {
            titlePlaceholder: 'Название (не обязательно)',
            messagePlaceholder: 'Основная мысль',
        },
    },
    delimiter: {
        class:  Delimiter,
        toolbox: {
            title: 'Разделитель'
        }
    }
};

