import nlp from 'compromise';

export const parseQuery = (text) => {
    // ✅ Normalize input like "3bhk" => "3 bhk"
    const normalized = text
        .replace(/(\d+)\s?(bhk|bedroom|room|rooms)/gi, '$1 $2') // ensure space between number and type
        .toLowerCase();

    const doc = nlp(normalized);

    // 🏠 Match BHK: "2 bhk", "3 bedroom", etc.
    const bhkMatch = doc.match('#Value (bhk|bedroom|room|rooms)');
    const bhk = bhkMatch.values().toNumber().out('array')[0] || null;

    // 💰 Match Price
    const priceMatch = doc.match('(under|below|budget) #Value');
    const price = priceMatch.values().toNumber().out('array')[0] || null;

    // 📍 Match location
    let locationMatch = doc.match('in *').out('text').replace('in ', '').trim();

    // fallback to after BHK match or last noun
    if (!locationMatch) {
        const afterBhk = bhkMatch.after('*').out('text').trim();
        locationMatch = afterBhk || doc.nouns().last().out('text').trim();
    }

    return {
        total_rooms: isNaN(bhk) ? null : bhk,
        max_price: isNaN(price) ? null : price,
        location: locationMatch || null,
    };
};
