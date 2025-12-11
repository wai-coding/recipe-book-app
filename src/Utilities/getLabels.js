export default function getLabels(calories) {
    const labels = [];
    if (calories <= 200) labels.push("Low Calories");
    if (calories > 200) labels.push("High Calories");
    return labels;
}