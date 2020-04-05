import Header from "@editorjs/header";
import Image from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
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
    image: {
        class: Image,
        toolbox: {
            title: 'Изображение'
        },
        inlineToolbar: ['link'],
    },
    simpleImage: SimpleImage,

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
    },
    marker: {
        class:  Marker,
        toolbox: {
            title: 'Маркер'
        }
    },
    delimiter: {
        class:  Delimiter,
        toolbox: {
            title: 'Разделитель'
        }
    }
};

