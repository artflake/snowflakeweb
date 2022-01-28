import React from "react";

const faqs = [
  {
    question: "What is the Art Flake DAO?",
    answer:
      "<p>The Art Flake DAO is an NFT-backed platform that leverages the power of community to bring distinctive value to digital art. Unlike traditional exchanges where any NFT may be bought and sold after minting, the Flake ecosystem ensures that the pieces of art that receive the most amount of community votes are eligible to be framed in a Flake, assigned a unique digital contract, and made eligible for trade on the Flake exchange. Also exclusive to Flake is the concept that art is currency, promoting a mindset shift that beauty and ideas may be exchanged for goods and services.</p>",
  },
  {
    question: "Why was the Art Flake DAO created?",
    answer:
      "<p>The mission of the Art Flake DAO is to put more power in the hands of artists — even those who have no prior experience working with cryptocurrency/DeFi, NFTs, etc. Artists may submit their work for free, and through Reddit-style voting the most popular art rises to the top. The most popular artworks within each voting period automatically get attached to a Flake, which transforms them into a highly-coveted NFT on the most exclusive exchange in existence.</p><p>By nature, talented artists from all different backgrounds can receive the recognition they deserve through this free, fair, democratic process. And unlike selling work through a gallery, which typically takes 30-50% of sale price, all Flake artists are free to post as much art to their personal profile as they wish - it is a corner of our museum that is curated by the artist for the artist.  They are free to list any work, and receive 100% of the list price - the Flake DAO makes profit from selling our NFT Coins - which is akin to selling a kind of picture frame.  The work inside of this picture frame is owned in full by whoever buys it - and the Flake Museum is given rights to display this work.  Reproduction rights of this work is conveyed to the Flake Museum and profits are split 50/50 if the work needs to be licensed for use in Movies, media or printed as physical copies.  This is one of the most generous business models for artists, and this is to identify and attract top talent in the space.</p>",
  },
  {
    question: "What is a Flake?",
    answer:
      "<p>Flake tokens have two main purposes: NFT “framing,” and currency.</p><p>First and foremost, Flake is an ERC20 token, so it has a utility as a currency. This allows a Flake to be traded on ERC20 DeFi platforms - such as Uniswap and any other centralized or decentralized exchange. The Flake faucet will check the current price on the exchanges such as Uniswap and use this as the floor price, and never sell below the floor value. In a worst case scenario, if the price dips below the ICO price then there is a hardcoded floor that the faucet will not go below. In theory, this allows the market to recover as new liquidity will not enter the market until the price recovers.</p><p>However, the main utility of Flake is to exist as a “picture frame” for community-selected NFT artworks. Art which receives the most votes will be “framed” in a Flake, and community members who own empty Flakes may pay a premium to attach them to their favorite artworks, if they didn’t receive enough votes to become an NFT on their own.</p>",
  },
  {
    question:
      "What happens with artworks that do not receive enough votes to be framed in a Flake?",
    answer:
      "Helping new artists get discovered is at the core of the Flake DAO’s mission. Artists may submit their works for free, and their creations will reach new audiences even if their art does not receive enough votes to be framed in a Flake. However, if a collector who owns an empty Flake would like to purchase a submitted work which has not received enough votes after the voting period has ended, they may choose to pay a premium to attach it to their Flake, which effectively mints it as their NFT.",
  },
  {
    question: "How many Flakes will be in circulation?",
    answer:
      "<p>A flake must be purchased at market rate and contain a piece of art in order to be in circulation - this means that only useful Flakes will ever be available to the market meaning far fewer than the cap will be in circulation - at least at the beginning.</p><p>No more than 1,000,000 Flakes will ever be minted — this is a hardcoded cap so that Flake holders know that these tokens are far more rare than Bitcoin or Ethereum which have a cap of 21 million and 116 million respectively. This inherently increases the value of any artwork attached to a Flake, an attractive alternative to minting for sale on traditional NFT exchanges where thousands of variations on millions of artworks already exist.</p><p>Each Flake will be minted in a “sub-Flake” pool, called a Collection. Each Collection can have a different floor price, a different theme/art prompt, and potentially different rules. For example, perhaps after the first 99 collections are released, the 100th can be a “Centuria Collection” where alternate-art variations of every minted Flake artwork is voted on for special recognition, and the floor price of this collection is significantly higher.</p>",
  },
  {
    question: "Who is involved in the Flake Community?",
    answer:
      "<p>The Flake Community is segmented into four core groups: artists, collectors, administrators.</p><p><strong>Administrators</strong></p><p>These are the people that keep the Art Flake DAO running. They include, but are not limited to, Flake Founders, Flake employees, and community moderators. A majority of their work occurs on the Flake exchange and on the Flake Discord. Administrators have unique badges that serve as important identifiers to others in the Flake Community.  These members are in service to the community as a whole.</p><p><strong>Artists</strong></p><p>Artists are the heart and soul of the Flake Community. Their creations are what the community engages with, from voting to buying and selling. Anyone may earn the Artist badge by submitting their original artwork for voting. Anyone can become an artist at any time by simply making an account and are able to upload as much art as they want and can list their works for sale or simply keep a collection.</p><p><strong>Collectors</strong></p><p>Anyone who owns one or more Flakes is a collector, whether or not there is a piece of art attached to it. Collectors may choose to buy or hold empty Flakes, or mint their favorite pieces of art on empty Flakes that they own.  Empty Flakes cannot be transferred out of the Flake exchange until it has an art work associated with it. People may also earn the Collector badge by buying an NFT with a Flake “frame.”</p><p>Voting rights are reserved for individuals who own Flake.  Fake account creation is something that has caused real problems in the Reddit community - and much like the democracy of the early United States where only land owners were able to vote - only individuals who care enough to own Flake should have any say in how our Museum operates.</p>",
  },
  {
    question: "How is the price of Flake art determined?",
    answer:
      "<p>Initial price is established by creating a Uniswap liquidity pool.  This allows the market to purchase flake through an exchange on day 1 - and allows the Flake faucet to determine what the floor price is so that new flake can be priced above the floor price. Due to scarcity, the price of flake should continue to increase over time as no source should be selling Flake below the floor value.  This economic policy is a great advantage to long term holders of Flakes.</p>",
  },
  {
    question: "How does the Art Flake DAO make money?",
    answer:
      "<p>The Art Flake DAO makes money by selling new flakes. The Flake DAO is an automated liquidity provider that wants the best price for the Flake coin.   Additionally, the Flake DAO can profit by selling reprints or licensing works on behalf of the artists.  This allows for the Museum to have additional sources of review beyond the initial sale of work and allows for artists to generate residual profits over time.</p><p><strong>Selling Flakes</strong></p><p>Flake tokens power the ecosystem, and are the only way artworks can become an NFT to be traded on the Flake exchange. When empty Flakes are sold, the money goes directly to the DAO.  Collectors and artists want the work inside of the Flake to fetch the highest value, which means that these Flakes can be sold on any auction house that supports the ERC721 NFC standard.</p>",
  },
  {
    question: "How does the Art Flake DAO plan to distribute its revenue?",
    answer: "<p>Good question…. Still being discussed.</p>",
  },
  {
    question: "How does voting affect the price?",
    answer:
      "<p>Voting is a market signal - and this signal is used by traders to determine what is popular. The vote for a specific work is always viewable on https://flake.art. A very popular piece of work is clearly seen by all - and this should translate into a much higher auction value.</p>",
  },
  {
    question:
      "If I buy an empty Flake do I still need to pay a transaction fee?",
    answer:
      "<p>The purchase of a Flake is conducted on the Flake exchange on https://flake.art.  Holding Flake in a cloud wallet is free and the minting fee was already paid by the Flake DAO.  All one million flakes already exist on the blockchain - if a user wants to transfer this Flake this is a on-chain ledger update, and is the same cost as transferring any ERC20 token.  This process is far cheaper than any other ERC721 NFT minting process.</p>",
  },
  {
    question: "Can I stake Flake in DeFi markets?",
    answer:
      "<p>Yes, you are able to Stake flake in DeFi Markets and purchasing or staking of flake will change which NFTs you may own.  One should not stake Flakes that are valuable - and valuable flakes can be “frozen” in place so that they are not accidentally sold via automated market making behavior.  This allows an individual to hold both very valuable flakes and to trade off less valuable flakes at the same time.</p>",
  },
];
export default function Collapsible() {
  return (
    <div id="acordeon">
      <div id="accordion" role="tablist" aria-multiselectable="true">
        <div className="card no-transition">
          {faqs.map((faq, key) => (
            <CollapsibleItem key={key} {...faq} index={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CollapsibleItem({ question, answer, index }) {
  return (
    <>
      <div
        className="card-header card-collapse"
        role="tab"
        id={`heading-${index + 1}`}
      >
        <h5 className="mb-0 panel-title">
          <a
            className="collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href={`#collapse-${index + 1}`}
            aria-expanded="false"
            aria-controls={`collapse-${index + 1}`}
          >
            {question}
            <i className="nc-icon nc-minimal-down"></i>
          </a>
        </h5>
      </div>

      <div
        id={`collapse-${index + 1}`}
        className="collapse"
        role="tabpanel"
        aria-labelledby={`heading-${index + 1}`}
      >
        <div className="card-body auto-height" dangerouslySetInnerHTML={{__html: answer}}></div>
      </div>
    </>
  );
}
