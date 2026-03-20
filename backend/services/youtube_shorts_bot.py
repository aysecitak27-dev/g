import time
import random

class YouTubeShortsBot:
    def __init__(self):
        self.view_count = 0
        self.total_watch_duration = 0
        self.stats = []

    def simulate_viewer(self):
        self.view_count += 1
        watch_duration = random.randint(5, 60)  # Simulate a watching time between 5 to 60 seconds
        self.total_watch_duration += watch_duration
        self.stats.append({'view_number': self.view_count, 'watch_duration': watch_duration})
        time.sleep(watch_duration)

    def get_statistics(self):
        average_duration = self.total_watch_duration / self.view_count if self.view_count > 0 else 0
        return {
            'total_views': self.view_count,
            'total_watch_duration': self.total_watch_duration,
            'average_watch_duration': average_duration,
        }

# Example usage
if __name__ == '__main__':
    bot = YouTubeShortsBot()
    for _ in range(10):  # Simulate 10 viewers
        bot.simulate_viewer()
        print(bot.get_statistics())