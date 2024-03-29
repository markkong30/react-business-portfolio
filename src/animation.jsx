export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    }
};

export const titleAnimation = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" },
    }
}

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut", delay: 1 }
    }
}

export const fadeWithoutDelay = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
}

export const fadeWorksDelay = {
    hidden: { opacity: 0, transition: { duration: 1.5 } },
    show: {
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut", delay: 1 }
    }

}

export const lineAnimationDelay = {
    hidden: { width: 0 },
    show: {
        width: "100%",
        transition: { duration: 1, ease: "easeOut", delay: 1 }
    }
}

export const go = {
    hidden: { opacity: 0, transition: { duration: 1.5 } },
    show: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }

}

export const photoAnimation = {
    hidden: {
        opacity: 0,
        transition: { duration: 0.75, ease: "easeOut" },
    },
    show: {
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" },

    }
}

export const lineAnimation = {
    hidden: { width: 0 },
    show: {
        width: "100%",
        transition: { duration: 1, ease: "easeOut" }
    }
}

export const slider = {
    hidden: { x: '-130%', skew: '45deg' },
    show: {
        x: '100%',
        skew: '0deg',
        transition: { duration: 1 }
    }
}

export const sliderContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};