import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [activeTab, setActiveTab] = useState('strategy')
  const [contentIdeas, setContentIdeas] = useState([])
  const [niche, setNiche] = useState('')
  const [postingFrequency, setPostingFrequency] = useState('daily')

  const generateContentIdeas = () => {
    const ideas = {
      'fashion': [
        'Outfit of the day transformations',
        'Before/After styling tips',
        'Seasonal wardrobe essentials',
        'Mix & match challenges',
        'Fashion hacks and tricks',
        'Trend spotting and analysis',
        'Budget vs luxury comparisons',
        'Style evolution timelines'
      ],
      'fitness': [
        'Progress transformation photos',
        'Workout pose demonstrations',
        'Meal prep showcase',
        'Fitness journey milestones',
        'Exercise form corrections',
        'Motivation quotes with your image',
        'Before/after workout looks',
        'Fitness challenge participation'
      ],
      'lifestyle': [
        'Day in the life sequences',
        'Morning/evening routine highlights',
        'Productivity setup tours',
        'Aesthetic flat lays',
        'Coffee/tea moments',
        'Work from home setups',
        'Self-care Sunday content',
        'Minimalist living tips'
      ],
      'beauty': [
        'Makeup transformation tutorials',
        'Skincare routine progression',
        'Product before/after results',
        'Seasonal beauty looks',
        'Natural vs glam comparisons',
        'Skincare journey documentation',
        'Color palette experiments',
        'Beauty product reviews'
      ],
      'travel': [
        'Destination outfit posts',
        'Travel preparation tips',
        'Location-based portraits',
        'Cultural experience highlights',
        'Packing list visuals',
        'Hidden gem discoveries',
        'Travel vs reality comparisons',
        'Seasonal travel guides'
      ],
      'business': [
        'Professional growth journey',
        'Work outfit ideas',
        'Success milestone celebrations',
        'Behind-the-scenes business life',
        'Entrepreneur daily routine',
        'Workspace aesthetic evolution',
        'Business tips with personality',
        'Personal branding showcase'
      ]
    }

    const selectedIdeas = ideas[niche] || [
      'Personal growth journey photos',
      'Quote-based inspiration posts',
      'Aesthetic lifestyle content',
      'Relatable moment captures',
      'Trend participation content',
      'Educational carousel posts',
      'Comparison content (then vs now)',
      'Behind-the-scenes glimpses'
    ]

    setContentIdeas(selectedIdeas)
  }

  return (
    <>
      <Head>
        <title>TikTok Revenue Growth Guide - Picture-Based Content Strategy</title>
        <meta name="description" content="Complete guide to building a revenue-generating TikTok account using picture-based content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="header">
          <h1>📸 TikTok Revenue Growth Guide</h1>
          <p>Transform Your Picture-Based Account Into A Money-Making Machine</p>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'strategy' ? 'active' : ''}`}
            onClick={() => setActiveTab('strategy')}
          >
            📋 Strategy
          </button>
          <button
            className={`tab ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            💡 Content Ideas
          </button>
          <button
            className={`tab ${activeTab === 'monetization' ? 'active' : ''}`}
            onClick={() => setActiveTab('monetization')}
          >
            💰 Monetization
          </button>
          <button
            className={`tab ${activeTab === 'growth' ? 'active' : ''}`}
            onClick={() => setActiveTab('growth')}
          >
            📈 Growth Tactics
          </button>
          <button
            className={`tab ${activeTab === 'roadmap' ? 'active' : ''}`}
            onClick={() => setActiveTab('roadmap')}
          >
            🗺️ 90-Day Roadmap
          </button>
        </div>

        <div className="content">
          {activeTab === 'strategy' && (
            <div className="strategy-section">
              <h2>🎯 Core Strategy for Picture-Based TikTok Success</h2>

              <p>Picture-based content (photo slideshows, image carousels) can be incredibly powerful on TikTok when executed strategically. Here's your complete blueprint:</p>

              <div className="card-grid">
                <div className="card">
                  <h3>1️⃣ Find Your Profitable Niche</h3>
                  <ul>
                    <li>Fashion & Style</li>
                    <li>Fitness Transformation</li>
                    <li>Lifestyle & Aesthetics</li>
                    <li>Beauty & Skincare</li>
                    <li>Travel & Adventure</li>
                    <li>Personal Development</li>
                    <li>Business & Entrepreneurship</li>
                  </ul>
                  <p><strong>Key:</strong> Pick ONE niche where your pictures tell a story or provide value.</p>
                </div>

                <div className="card">
                  <h3>2️⃣ Content Formula</h3>
                  <p><strong>The Hook-Value-CTA Method:</strong></p>
                  <ul>
                    <li>First image: Eye-catching hook</li>
                    <li>Middle images: Deliver value/story</li>
                    <li>Last image: Call-to-action</li>
                    <li>Use trending audio</li>
                    <li>Add text overlays for context</li>
                    <li>Create emotional connection</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>3️⃣ Posting Strategy</h3>
                  <ul>
                    <li><strong>Frequency:</strong> 2-3 times daily</li>
                    <li><strong>Best times:</strong> 7-9AM, 12-2PM, 7-11PM</li>
                    <li><strong>Length:</strong> 15-30 seconds optimal</li>
                    <li><strong>Consistency:</strong> Post daily for 90 days</li>
                    <li><strong>Variety:</strong> Mix content types</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>4️⃣ Technical Excellence</h3>
                  <ul>
                    <li>High-resolution images (1080x1920)</li>
                    <li>Consistent color grading/filters</li>
                    <li>Professional editing apps</li>
                    <li>Trending audio integration</li>
                    <li>Compelling captions with hooks</li>
                    <li>Strategic hashtag use (5-8 tags)</li>
                  </ul>
                </div>
              </div>

              <div className="highlight-box">
                <h3>🔥 Picture Content Types That Go Viral:</h3>
                <ul>
                  <li><strong>Transformation Content:</strong> Before/after sequences</li>
                  <li><strong>Educational Carousels:</strong> Step-by-step guides with images</li>
                  <li><strong>Storytelling:</strong> Photo sequences that tell a narrative</li>
                  <li><strong>Aesthetic Compilations:</strong> Themed image collections</li>
                  <li><strong>Relatable Moments:</strong> Images that resonate emotionally</li>
                  <li><strong>Trend Participation:</strong> Your images on trending formats</li>
                </ul>
              </div>

              <h3>📊 Key Metrics to Track:</h3>
              <ul className="checklist">
                <li>Average watch time (aim for 80%+)</li>
                <li>Engagement rate (likes, comments, shares)</li>
                <li>Follower growth rate</li>
                <li>Profile visit rate</li>
                <li>Link clicks (when available)</li>
                <li>Best performing content types</li>
              </ul>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="strategy-section">
              <h2>💡 Content Idea Generator</h2>

              <div className="tool-section">
                <h3>Generate Custom Content Ideas</h3>

                <div className="input-group">
                  <label>Select Your Niche:</label>
                  <select value={niche} onChange={(e) => setNiche(e.target.value)}>
                    <option value="">Choose a niche...</option>
                    <option value="fashion">Fashion & Style</option>
                    <option value="fitness">Fitness & Health</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="beauty">Beauty & Skincare</option>
                    <option value="travel">Travel</option>
                    <option value="business">Business & Entrepreneurship</option>
                  </select>
                </div>

                <button className="btn" onClick={generateContentIdeas}>
                  Generate Content Ideas
                </button>

                {contentIdeas.length > 0 && (
                  <div className="result-box">
                    <h4>Your Custom Content Ideas:</h4>
                    <ul>
                      {contentIdeas.map((idea, index) => (
                        <li key={index} style={{marginBottom: '10px', lineHeight: '1.6'}}>
                          <strong>Idea #{index + 1}:</strong> {idea}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <h3>🎬 Content Formulas That Work:</h3>

              <div className="card-grid">
                <div className="card">
                  <h3>The Transformation Formula</h3>
                  <p><strong>Structure:</strong></p>
                  <ul>
                    <li>Slide 1: "Before" state</li>
                    <li>Slides 2-4: Process/journey</li>
                    <li>Slide 5: "After" result</li>
                    <li>Add trending audio + text overlay</li>
                  </ul>
                  <p><strong>Example:</strong> "How I went from [problem] to [solution] in [timeframe]"</p>
                </div>

                <div className="card">
                  <h3>The List Format</h3>
                  <p><strong>Structure:</strong></p>
                  <ul>
                    <li>Slide 1: "X things about [topic]"</li>
                    <li>Slides 2-6: One point per slide</li>
                    <li>Each with compelling visual</li>
                    <li>Use numbers/emojis</li>
                  </ul>
                  <p><strong>Example:</strong> "5 outfit rules I wish I knew sooner"</p>
                </div>

                <div className="card">
                  <h3>The Story Arc</h3>
                  <p><strong>Structure:</strong></p>
                  <ul>
                    <li>Slide 1: Hook with intrigue</li>
                    <li>Slides 2-4: Build tension</li>
                    <li>Slide 5: Resolution/payoff</li>
                    <li>Add emotional music</li>
                  </ul>
                  <p><strong>Example:</strong> "The day that changed everything..."</p>
                </div>

                <div className="card">
                  <h3>The Tutorial Format</h3>
                  <p><strong>Structure:</strong></p>
                  <ul>
                    <li>Slide 1: Final result preview</li>
                    <li>Slides 2-6: Step-by-step process</li>
                    <li>Clear text instructions</li>
                    <li>Your images demonstrating</li>
                  </ul>
                  <p><strong>Example:</strong> "How to style one outfit 5 ways"</p>
                </div>
              </div>

              <div className="highlight-box">
                <h3>⚡ Quick Content Ideas (Post These Today):</h3>
                <ul>
                  <li>"Things I wish I knew at [age]" with your photos</li>
                  <li>"POV: You're [aspirational scenario]" with aesthetic images</li>
                  <li>"Get ready with me" photo sequence</li>
                  <li>"This or that?" comparison posts</li>
                  <li>"A day in my life" highlights</li>
                  <li>"How it started vs how it's going"</li>
                  <li>"Outfit inspiration for [occasion]"</li>
                  <li>"My [morning/evening] routine" visuals</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'monetization' && (
            <div className="strategy-section">
              <h2>💰 Revenue Generation Strategies</h2>

              <p>Here's how to turn your picture-based TikTok into a revenue-generating asset:</p>

              <h3>🎯 Phase 1: Build Foundation (0-10K followers)</h3>

              <div className="card-grid">
                <div className="card">
                  <h3>1. TikTok Creator Fund</h3>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    <li>10K+ followers</li>
                    <li>100K video views (30 days)</li>
                    <li>18+ years old</li>
                  </ul>
                  <p><strong>Earnings:</strong> $0.02-0.04 per 1K views</p>
                  <p><strong>Strategy:</strong> Focus on high retention content</p>
                </div>

                <div className="card">
                  <h3>2. Affiliate Marketing</h3>
                  <p><strong>Start immediately:</strong></p>
                  <ul>
                    <li>Join Amazon Associates</li>
                    <li>Sign up for LTK (rewardStyle)</li>
                    <li>Join brand affiliate programs</li>
                  </ul>
                  <p><strong>Earnings:</strong> 5-20% commission per sale</p>
                  <p><strong>Strategy:</strong> Feature products in your photos</p>
                </div>

                <div className="card">
                  <h3>3. Link in Bio Monetization</h3>
                  <p><strong>Tools to use:</strong></p>
                  <ul>
                    <li>Beacons/Linktree with shops</li>
                    <li>Stan Store for digital products</li>
                    <li>Gumroad for guides/presets</li>
                  </ul>
                  <p><strong>Earnings:</strong> Varies widely</p>
                  <p><strong>Strategy:</strong> Drive traffic to monetized links</p>
                </div>

                <div className="card">
                  <h3>4. Digital Products</h3>
                  <p><strong>What to sell:</strong></p>
                  <ul>
                    <li>Photo presets/filters</li>
                    <li>E-books or guides</li>
                    <li>Templates or planners</li>
                    <li>Online courses</li>
                  </ul>
                  <p><strong>Earnings:</strong> $10-200 per product</p>
                  <p><strong>Strategy:</strong> Create once, sell repeatedly</p>
                </div>
              </div>

              <h3>🚀 Phase 2: Scale Revenue (10K-100K followers)</h3>

              <div className="card-grid">
                <div className="card">
                  <h3>5. Brand Partnerships</h3>
                  <p><strong>How to get started:</strong></p>
                  <ul>
                    <li>Join influencer marketplaces (Aspire, Creator.co)</li>
                    <li>Create a media kit</li>
                    <li>Pitch brands directly</li>
                    <li>Use #ad disclosure</li>
                  </ul>
                  <p><strong>Earnings:</strong> $100-1000 per post (10K-100K followers)</p>
                </div>

                <div className="card">
                  <h3>6. TikTok Shop</h3>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    <li>5K+ followers</li>
                    <li>Product showcase in videos</li>
                    <li>Enable shopping features</li>
                  </ul>
                  <p><strong>Earnings:</strong> Commission on sales</p>
                  <p><strong>Strategy:</strong> Feature products in photo content</p>
                </div>

                <div className="card">
                  <h3>7. Coaching/Consulting</h3>
                  <p><strong>Services to offer:</strong></p>
                  <ul>
                    <li>1-on-1 consulting in your niche</li>
                    <li>Group coaching programs</li>
                    <li>Content strategy sessions</li>
                  </ul>
                  <p><strong>Earnings:</strong> $50-500 per session</p>
                  <p><strong>Strategy:</strong> Showcase expertise through content</p>
                </div>

                <div className="card">
                  <h3>8. Membership/Subscription</h3>
                  <p><strong>Platforms:</strong></p>
                  <ul>
                    <li>Patreon for exclusive content</li>
                    <li>OnlyFans (non-adult content)</li>
                    <li>Buy Me a Coffee</li>
                  </ul>
                  <p><strong>Earnings:</strong> $5-50 per member monthly</p>
                  <p><strong>Strategy:</strong> Offer behind-the-scenes access</p>
                </div>
              </div>

              <div className="highlight-box">
                <h3>💡 Revenue Timeline Expectations:</h3>
                <ul>
                  <li><strong>Month 1-2:</strong> $0-50 (building audience, testing affiliate links)</li>
                  <li><strong>Month 3-4:</strong> $50-300 (first digital product sales, growing affiliate income)</li>
                  <li><strong>Month 5-6:</strong> $300-1000 (brand partnerships start, multiple revenue streams)</li>
                  <li><strong>Month 7-12:</strong> $1000-5000+ (consistent brand deals, scaled digital products, coaching)</li>
                </ul>
                <p><strong>Note:</strong> Results depend on consistency, niche selection, and audience engagement.</p>
              </div>

              <h3>📋 Action Checklist - Start Making Money NOW:</h3>
              <ul className="checklist">
                <li>Set up a business TikTok account</li>
                <li>Add link in bio (use Beacons or Stan Store)</li>
                <li>Join 3 affiliate programs relevant to your niche</li>
                <li>Create your first digital product (preset, guide, template)</li>
                <li>Sign up for influencer marketplace (Aspire, GRIN)</li>
                <li>Create a simple media kit with your stats</li>
                <li>Plan content that naturally features products</li>
                <li>Add affiliate links to bio and promote in videos</li>
              </ul>
            </div>
          )}

          {activeTab === 'growth' && (
            <div className="strategy-section">
              <h2>📈 Growth Tactics & Algorithms</h2>

              <h3>🎯 Understanding TikTok's Algorithm for Photo Content:</h3>
              <p>TikTok's algorithm prioritizes content that keeps users on the platform. For picture-based content, here's what matters:</p>

              <div className="card-grid">
                <div className="card">
                  <h3>Watch Time</h3>
                  <p><strong>Goal:</strong> Get viewers to watch entire video</p>
                  <ul>
                    <li>Keep videos 15-30 seconds</li>
                    <li>Hook in first second</li>
                    <li>Use fast transitions</li>
                    <li>Add text to increase watch time</li>
                    <li>End with cliffhanger or CTA</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Engagement Signals</h3>
                  <p><strong>What boosts your content:</strong></p>
                  <ul>
                    <li>Likes (mild boost)</li>
                    <li>Comments (strong boost)</li>
                    <li>Shares (strongest boost)</li>
                    <li>Saves (very strong)</li>
                    <li>Profile visits (good signal)</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Completion Rate</h3>
                  <p><strong>Critical metric:</strong></p>
                  <ul>
                    <li>Aim for 80%+ completion</li>
                    <li>Test shorter durations</li>
                    <li>Use pattern interrupts</li>
                    <li>Match audio to transitions</li>
                    <li>Create curiosity loops</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Re-watches</h3>
                  <p><strong>Signals virality:</strong></p>
                  <ul>
                    <li>Add details worth re-watching</li>
                    <li>Use layered text overlays</li>
                    <li>Include easter eggs</li>
                    <li>Create satisfying loops</li>
                    <li>End frames that make sense as start</li>
                  </ul>
                </div>
              </div>

              <h3>🚀 Advanced Growth Strategies:</h3>

              <div className="tool-section">
                <h4>1. The Hook Formula (First 3 Seconds)</h4>
                <ul>
                  <li><strong>Pattern Interrupt:</strong> "Wait until you see slide 3..."</li>
                  <li><strong>Bold Statement:</strong> "This changed my entire [niche]..."</li>
                  <li><strong>Curiosity Gap:</strong> "Nobody talks about this..."</li>
                  <li><strong>Relatable Problem:</strong> "If you struggle with [problem]..."</li>
                  <li><strong>Shocking Stat:</strong> "90% of people don't know this..."</li>
                </ul>
              </div>

              <div className="tool-section">
                <h4>2. Engagement Baiting (Ethical)</h4>
                <ul>
                  <li><strong>Comment Prompts:</strong> "Which slide was your favorite? Comment the number!"</li>
                  <li><strong>Debate Starters:</strong> "Hot take: [controversial opinion]"</li>
                  <li><strong>Question Endings:</strong> "Which would you choose?"</li>
                  <li><strong>Tag a Friend:</strong> "Tag someone who needs to see this"</li>
                  <li><strong>Save Prompts:</strong> "Save this so you don't lose it!"</li>
                </ul>
              </div>

              <div className="tool-section">
                <h4>3. Hashtag Strategy</h4>
                <p><strong>The 5-8 Hashtag Rule:</strong></p>
                <ul>
                  <li><strong>2-3 Niche Hashtags:</strong> #fashiontips #outfitinspo #styleadvice</li>
                  <li><strong>1-2 Trending Hashtags:</strong> Check TikTok's trending page daily</li>
                  <li><strong>1-2 Size-Appropriate:</strong> Match your follower count
                    <ul>
                      <li>0-10K: Use tags with 100K-1M views</li>
                      <li>10K-100K: Use tags with 1M-10M views</li>
                      <li>100K+: Use tags with 10M+ views</li>
                    </ul>
                  </li>
                  <li><strong>1 Branded Hashtag:</strong> Create your own unique tag</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h3>⚡ Growth Hacks for Picture Content:</h3>
                <ul>
                  <li><strong>The 3-1 Ratio:</strong> Post 3 value-driven videos, then 1 promotional</li>
                  <li><strong>Series Content:</strong> "Part 1/5" keeps viewers coming back</li>
                  <li><strong>Trend Jacking:</strong> Put your pictures on trending templates</li>
                  <li><strong>Cross-Pollination:</strong> Reference other videos in comments</li>
                  <li><strong>Collab Features:</strong> Use duet/stitch to tap other audiences</li>
                  <li><strong>Posting Windows:</strong> Test 3 different times daily for 7 days, track best performers</li>
                  <li><strong>The 1-Hour Rule:</strong> Engage with your niche for 1 hour daily (like, comment, follow)</li>
                  <li><strong>Batch Creation:</strong> Create 15-20 videos in one session for consistency</li>
                </ul>
              </div>

              <h3>📊 Analytics to Monitor Weekly:</h3>
              <ul className="checklist">
                <li>Average view duration (aim for improvement each week)</li>
                <li>Profile visit rate (should be 5-10% of views)</li>
                <li>Follower growth rate (track daily increases)</li>
                <li>Best performing content themes</li>
                <li>Peak engagement times</li>
                <li>Share rate (higher = more viral potential)</li>
                <li>Traffic source (For You page vs followers)</li>
              </ul>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="strategy-section">
              <h2>🗺️ Your 90-Day Growth Roadmap</h2>

              <p>Follow this proven roadmap to build a profitable picture-based TikTok account from scratch:</p>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Days 1-7: Foundation & Setup</h4>
                    <ul>
                      <li>Switch to Business/Creator account</li>
                      <li>Optimize profile: clear niche, compelling bio, profile picture</li>
                      <li>Research top 10 accounts in your niche</li>
                      <li>Set up content creation tools (CapCut, Canva, etc.)</li>
                      <li>Create content bank: 50+ high-quality photos</li>
                      <li>Plan your first 30 video concepts</li>
                      <li>Join 3 affiliate programs</li>
                      <li><strong>Goal:</strong> Post 3 videos, get familiar with platform</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Days 8-30: Consistency & Testing</h4>
                    <ul>
                      <li>Post 2-3 times daily at different time slots</li>
                      <li>Test different content formats (transformation, lists, stories)</li>
                      <li>Engage 1 hour daily in your niche (comment, like, follow)</li>
                      <li>Respond to all comments within 1 hour of posting</li>
                      <li>Analyze top 5 performing videos - identify patterns</li>
                      <li>Adjust strategy based on data</li>
                      <li>Create your first digital product draft</li>
                      <li><strong>Goal:</strong> 1,000 followers, identify winning content formula</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Days 31-60: Optimization & Scaling</h4>
                    <ul>
                      <li>Double down on proven content types</li>
                      <li>Implement advanced hooks and CTAs</li>
                      <li>Start series content ("Part 1 of X")</li>
                      <li>Launch your first digital product</li>
                      <li>Set up link in bio with monetization</li>
                      <li>Create media kit for brand partnerships</li>
                      <li>Join influencer marketplaces</li>
                      <li>Pitch 10 brands for potential collabs</li>
                      <li><strong>Goal:</strong> 5,000-10,000 followers, first $100 in revenue</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Days 61-90: Monetization & Authority</h4>
                    <ul>
                      <li>Apply for TikTok Creator Fund</li>
                      <li>Secure first brand partnership</li>
                      <li>Launch second digital product</li>
                      <li>Start offering coaching/consulting</li>
                      <li>Create content highlighting results/expertise</li>
                      <li>Build email list from TikTok traffic</li>
                      <li>Expand to Instagram Reels (repurpose content)</li>
                      <li>Plan next 90 days with revenue goals</li>
                      <li><strong>Goal:</strong> 10,000+ followers, $500-1000 monthly revenue</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="highlight-box">
                <h3>🎯 Weekly Action Items (Do These Every Week):</h3>
                <ul>
                  <li><strong>Monday:</strong> Plan content for the week, batch create 7-14 videos</li>
                  <li><strong>Tuesday:</strong> Review analytics, identify top performer, create similar content</li>
                  <li><strong>Wednesday:</strong> Engagement day - spend 2 hours in your niche community</li>
                  <li><strong>Thursday:</strong> Pitch/reach out to brands or affiliates</li>
                  <li><strong>Friday:</strong> Work on digital products or monetization setup</li>
                  <li><strong>Saturday:</strong> Research trends, save content ideas for next week</li>
                  <li><strong>Sunday:</strong> Rest or create backup content</li>
                </ul>
              </div>

              <h3>📊 Success Milestones & Expectations:</h3>

              <div className="card-grid">
                <div className="card">
                  <h3>Month 1</h3>
                  <ul>
                    <li>500-1,500 followers</li>
                    <li>50,000-100,000 total views</li>
                    <li>$0-50 revenue</li>
                    <li>Learned what content works</li>
                    <li>Consistent posting habit</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Month 2</h3>
                  <ul>
                    <li>3,000-7,000 followers</li>
                    <li>200,000-500,000 total views</li>
                    <li>$50-300 revenue</li>
                    <li>First viral video (100K+ views)</li>
                    <li>Affiliate sales starting</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Month 3</h3>
                  <ul>
                    <li>8,000-15,000 followers</li>
                    <li>500,000-2M total views</li>
                    <li>$300-1,000+ revenue</li>
                    <li>First brand partnership</li>
                    <li>Digital product selling</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Month 6+ Goal</h3>
                  <ul>
                    <li>50,000-100,000+ followers</li>
                    <li>5M+ total views</li>
                    <li>$2,000-10,000+ revenue</li>
                    <li>Multiple income streams</li>
                    <li>Sustainable business</li>
                  </ul>
                </div>
              </div>

              <div className="tool-section">
                <h3>🛠️ Essential Tools Stack:</h3>
                <p><strong>Free Tools:</strong></p>
                <ul>
                  <li><strong>CapCut:</strong> Video editing (adding photos, transitions, text)</li>
                  <li><strong>Canva:</strong> Graphics, thumbnails, text overlays</li>
                  <li><strong>InShot:</strong> Quick mobile editing</li>
                  <li><strong>RemoveBG:</strong> Background removal</li>
                  <li><strong>Snapseed:</strong> Photo editing</li>
                </ul>

                <p><strong>Paid Tools (Worth It):</strong></p>
                <ul>
                  <li><strong>Lightroom Preset Pack:</strong> Consistent aesthetic ($20-50 one-time)</li>
                  <li><strong>Stan Store/Beacons Pro:</strong> Link in bio monetization ($25-50/month)</li>
                  <li><strong>Social Blade:</strong> Analytics tracking ($4/month)</li>
                  <li><strong>TubeBuddy:</strong> Trend research ($9/month)</li>
                </ul>
              </div>

              <ul className="checklist">
                <li>Save this roadmap and check off items daily</li>
                <li>Don't skip ahead - each phase builds on the last</li>
                <li>Track your progress in a spreadsheet or notion</li>
                <li>Adjust timeline based on your availability (3-4 hours daily recommended)</li>
                <li>Celebrate small wins - consistency compounds</li>
                <li>Join TikTok creator communities for support</li>
                <li>Remember: Most people quit before day 30 - your persistence is your advantage</li>
              </ul>

              <div className="highlight-box">
                <h3>💪 Mindset for Success:</h3>
                <p>Building a revenue-generating TikTok account is a marathon, not a sprint. Here's what you need to remember:</p>
                <ul>
                  <li><strong>Consistency beats perfection:</strong> Post imperfect content daily rather than perfect content weekly</li>
                  <li><strong>Data over feelings:</strong> Make decisions based on analytics, not assumptions</li>
                  <li><strong>Test and iterate:</strong> What works for others might not work for you - find your formula</li>
                  <li><strong>Provide value first:</strong> Help your audience, then monetization becomes natural</li>
                  <li><strong>Long-term thinking:</strong> Building authority takes time, but it's worth it</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
