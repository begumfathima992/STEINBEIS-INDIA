const Asset = require("../models/Assests");

module.exports = {
    createAsset: async (req, res) => {
        try {
            let { assetName, quantity, cost } = req.body;
            if (!assetName || !quantity || !cost) {
                return res.status(400).json({ message: 'All fields are required.' });
            }

            const existingAsset = await Asset.findOne({ assetName: assetName });
            if (!existingAsset) {
                const newAsset = { assetName, quantity, cost };
                const createdAsset = await Asset.create(newAsset);
                return res.status(201).json({ message: 'Assets created successfully', data: createdAsset });
            } else {
                return res.status(400).json({ message: 'Asset already exists.' });
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getAllAssets : async (req, res) => {
      try {
        // Fetch all assets from the database
        const assets = await Asset.find();
    
        // Return the assets as a JSON response
        res.status(200).json({ message: 'Assets retrieved successfully', data: assets });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
    
   
    soldAssets: async(req,res)=>{
        try {
            const { username, assetName, bankBalance } = req.body;
            const assetToPurchase = await Asset.findOne({ assetName: req.body.assetName });
        
            if (!assetToPurchase) {
              return res.status(404).json({ message: 'Asset not found.' });
            }
        
            if (assetToPurchase.quantity < 1) {
              return res.status(400).json({ message: 'Asset is out of stock.' });
            }
        
            if (bankBalance < assetToPurchase.cost) {
              return res.status(400).json({ message: 'Insufficient funds.' });
            }
            assetToPurchase.quantity -= 1;
            await assetToPurchase.save();
        
            res.status(200).json({
              message: 'Asset purchased successfully.',
            });
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
          }
    }
};
