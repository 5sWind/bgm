// return value send
contract KingOfTheBgmchainThrone{
	struct Monarch {
		// address of the king .
		address bgmAddr ;
		string name ;
		// how much he pays to previous king
		uint claimPrice ;
		uint coronationTimestamp;
	}
	Monarch public currentMonarch ;

	function claimThrone ( string name ) {
	    address wizardAddress;
	    uint compensation = 100;
	    uint valuePaid = 10;

		if ( currentMonarch.bgmAddr != wizardAddress )
			if (currentMonarch.bgmAddr.send( compensation )) throw;

		currentMonarch = Monarch(msg.sender,name,valuePaid,block.timestamp);
	}
}
