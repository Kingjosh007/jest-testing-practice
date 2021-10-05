const stringLength = (str) => {
    if(!(str.length > 1)) 
    {
        throw new Error('MIN_LENGTH_ERROR: The string should be at least 1 character long');
    }
    else
    {
        if(!(str.length <= 10)) 
        {
            throw new Error('MAX_LENGTH_ERROR: The string should not be longer than 10 characters.');
        }
        else {
            return str.length;
        }
    }
    
};
module.exports = stringLength;