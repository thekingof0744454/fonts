
        document.addEventListener('DOMContentLoaded', function() {
            var allowedURLs = [
                "https://orgmovies.store",
                "https://neuplayer.blogspot.com",
                "localhost"
            ];

            var foundMatch = false;
            
            // Check if current domain matches any allowed URL
            for(var i = 0; i < allowedURLs.length; i++) {
                if(window.location.href.indexOf(allowedURLs[i]) !== -1) {
                    foundMatch = true;
                    break;
                }
            }

            if(!foundMatch) {
                // Inject CSS
                var css = `
                    .entry-content {
                        position: relative;
                        padding: 60px 15px 15px 15px;
                        margin: 15px auto;
                        background: rgba(0,0,0,0.8);
                        border-radius: 5px;
                    }
                    .license-alert {
                        background: #ffeb3b;
                        color: #000;
                        padding: 15px;
                        border-radius: 5px;
                        margin-bottom: 15px;
                    }
                    .verify-btn {
                        background: #4CAF50;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        margin-top: 10px;
                    }
                `;
                
                var style = document.createElement('style');
                style.appendChild(document.createTextNode(css));
                document.head.appendChild(style);

                // Modify main content
                var mainElement = document.querySelector('.entry-content');
                if(mainElement) {
                    mainElement.style.opacity = '0.5';
                    mainElement.innerHTML = `
                        <div class="license-alert">
                            Your License Is Not Active. 
                            <button class="verify-btn" onclick="window.open('https://t.me/RoxForRox', '_blank')">
                                Verify Now
                            </button>
                        </div>
                        ${mainElement.innerHTML}
                    `;
                } else {
                    console.error('Main content element not found');
                }

                // Show alert with verification option
                if (confirm('Your domain is not licensed for this theme. Click OK to verify your license on Telegram.')) {
                    window.open('https://t.me/RoxForRox', '_blank');
                }
            }
        });
