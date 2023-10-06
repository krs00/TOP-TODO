let isEditing = false

export function getIsEditing() {
    return isEditing
}

export function toggleEditingFalse() {
    isEditing = false
}

export function toggleEditingTrue() {
    isEditing = true
}