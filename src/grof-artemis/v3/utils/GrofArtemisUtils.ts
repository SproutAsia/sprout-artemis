const GrofArtemisUtils = {
    convertGrofPositionToArtemisPosition: (position: string) => {
        if (position === "Chief Executive Officer") {
            return "CEO"
        }
        return position
    }
}

export default GrofArtemisUtils